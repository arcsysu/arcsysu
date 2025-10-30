// 高亮函数
$(function() {
      function highlightKeyword($element, keyword) {
          removeHighlight($element);
          
          if (!keyword) return;
          
          // 转义特殊字符
          var escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          
          // 递归遍历所有文本节点
          function highlightTextNodes(node) {
              if (node.nodeType === 3) { // 文本节点
                  var text = node.nodeValue;
                  var regex = new RegExp(escapedKeyword, 'gi');
                  
                  if (regex.test(text)) {
                      // 创建一个临时容器
                      var $temp = $('<span>');
                      var highlightedText = text.replace(regex, function(match) {
                          return '<mark class="search-highlight">' + match + '</mark>';
                      });
                      $temp.html(highlightedText);
                      
                      // 替换原文本节点
                      $(node).replaceWith($temp.contents());
                  }
              } else if (node.nodeType === 1 && node.nodeName !== 'MARK') { // 元素节点，但不是mark标签
                  // 递归处理子节点
                  $(node).contents().each(function() {
                      highlightTextNodes(this);
                  });
              }
          }
          
          $element.contents().each(function() {
              highlightTextNodes(this);
          });
      }
      
      // 移除高亮
      function removeHighlight($element) {
          $element.find('mark.search-highlight').each(function() {
              var $this = $(this);
              $this.replaceWith($this.text());
          });
          
          // 规范化文本节点（合并相邻的文本节点）
          $element.each(function() {
              this.normalize();
          });
      }
      
      // 标签页切换
      $('ul.tab-nav li .button').click(function() {
          var href = $(this).attr('data-ref');  
          // 移除所有按钮的激活状态
          $('ul.tab-nav li .button').removeClass('active');
          // 激活当前按钮
          $(this).addClass('active');
          // 隐藏所有内容面板
          $('.tab-content .tab-pane').removeClass('active');
          // 显示对应的内容面板
          $(href).addClass('active');
          
          // 控制显示位置
          var $target = $('#conferencejournal-publications');
          if ($target.length === 0) {
              $target = $('h2:contains("Conference/Journal Publications")');
          }
          if ($target.length > 0) {
              var scrollTarget = $target.offset().top - 70;
              $('html, body').animate({
                  scrollTop: scrollTarget
              }, 300); 
          }
          
          return false;
      });
      
      // 搜索框
      $('#pub-search').on('input', function() {
          var keyword = $(this).val().toLowerCase().trim();
          
          // 始终显示搜索框
          $('.pub-search-container').show();
          
          // 搜索框为空时显示所有项目并移除高亮
          if (keyword === '') {
              $('.pub-item').each(function() {
                  $(this).show();
                  removeHighlight($(this));
              });
              $('#search-results-count').text('');
              return;
          }
          
          var visibleCount = 0;
          var currentPane = $('.tab-pane.active');
          
          // 遍历论文 
          currentPane.find('.pub-item').each(function() {
              var $item = $(this);
              var text = $item.text().toLowerCase();
              
              // 检查是否包含关键字
              if (text.indexOf(keyword) !== -1) {
                  $item.show();
                  visibleCount++;
                  highlightKeyword($item, keyword);
              } else {
                  $item.hide();
                  removeHighlight($item);
              }
          });
          
          // Display search results count
          if (visibleCount === 0) {
              $('#search-results-count').html('<span style="color: #dc3545; font-size: 16px;">No matching publication found</span>');
          } else {
              $('#search-results-count').html('<span style="color: #057234; font-size: 16px;">' + visibleCount + ' matching publication' + (visibleCount > 1 ? 's' : '') + ' found</span>');
          }
      });
      
      // 切换标签页时清空搜索并显示所有内容
      $('ul.tab-nav li .button').on('click', function() {
          // 清空搜索框和结果计数
          $('#pub-search').val('');
          $('#search-results-count').text('');
          // 显示新标签页的所有内容并移除高亮
          setTimeout(function() {
              $('.tab-pane.active .pub-item').each(function() {
                  $(this).show();
                  removeHighlight($(this));
              });
          }, 10);
      });
      
      // 清空搜索按钮功能
      $('#clear-search').on('click', function() {
          $('#pub-search').val('');
          $('#pub-search').trigger('input');
          $('#pub-search').focus();
      });
  });