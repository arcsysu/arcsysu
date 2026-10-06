/* Progressive enhancement: without JS, every published link remains visible. */
document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('miscid');
  if (!root) return;
  // Re-evaluate the compact deadline list on each visit, using the same data as the full page.
  var conferenceData = root.querySelector('#misc-conference-data');
  if (conferenceData) {
    var settings = root.querySelector('#misc-conference-settings');
    var summary = root.querySelector('.misc-conference-summary');
    var upcoming = JSON.parse(conferenceData.textContent).filter(function (c) {
      return c.utc && Date.parse(c.utc) > Date.now();
    }).sort(function (a, b) { return Date.parse(a.utc) - Date.parse(b.utc); }).slice(0, 3);
    summary.replaceChildren();
    upcoming.forEach(function (c) {
      var li = document.createElement('li');
      var line = document.createElement('div'); line.className = 'misc-conference-line';
      var link = document.createElement('a'); link.href = settings.dataset.url + '#' + c.id; link.textContent = c.name;
      line.append(link);
      var meta = document.createElement('div'); meta.className = 'misc-conference-meta';
      var city = document.createElement('span'); city.textContent = c.city; meta.append(city);
      if (c.id === 'mlsys') { var warning = document.createElement('span'); warning.className = 'misc-deadline-warning'; warning.textContent = settings.dataset.warning; meta.append(warning); }
      var dates = document.createElement('dl'); dates.className = 'misc-conference-dates';
      [['Abstract', c.abstract], ['Full', c.full], ['Notification', c.notice]].forEach(function (pair) {
        var cell = document.createElement('div');
        var label = document.createElement('dt'); label.textContent = pair[0];
        var value = document.createElement('dd');
        if (pair[0] === 'Full') { var time = document.createElement('time'); time.dateTime = c.utc; time.textContent = pair[1]; value.append(time); }
        else value.textContent = pair[1];
        cell.append(label, value); dates.append(cell);
      });
      li.append(line, meta, dates); summary.append(li);
    });
    var empty = root.querySelector('#misc-conferences .misc-empty');
    if (!upcoming.length && !empty) { empty = document.createElement('p'); empty.className = 'misc-empty'; summary.after(empty); }
    if (empty) { empty.textContent = settings.dataset.empty; empty.hidden = upcoming.length !== 0; }
  }
  var input = root.querySelector('#misc-search');
  var limit = 3;
  var sections = Array.from(root.querySelectorAll('.misc-section')).map(function (section) {
    var list = section.querySelector('.misc-list, .misc-series');
    if (!list) return null;
    return {
      items: Array.from(list.children),
      button: section.querySelector('.misc-more'),
      empty: section.querySelector('.misc-no-results'),
      searchable: section.id === 'misc-resources' || section.id === 'misc-posts',
      expanded: false
    };
  }).filter(Boolean);

  function render(state) {
    var query = state.searchable ? input.value.trim().toLocaleLowerCase() : '';
    var matching = state.items.filter(function (item) {
      return item.textContent.toLocaleLowerCase().includes(query);
    });
    var visible = state.expanded ? matching : matching.slice(0, limit);
    state.items.forEach(function (item) { item.hidden = !visible.includes(item); });
    if (state.empty) state.empty.hidden = matching.length !== 0;
    if (state.button) {
      state.button.disabled = matching.length <= limit;
      state.button.setAttribute('aria-expanded', String(state.expanded));
      state.button.textContent = state.expanded ? state.button.dataset.less :
        state.button.dataset.more;
    }
  }

  sections.forEach(function (state) {
    if (state.button) state.button.addEventListener('click', function () {
      state.expanded = !state.expanded;
      render(state);
    });
    render(state);
  });
  root.querySelector('.misc-search').hidden = false;
  input.addEventListener('input', function () {
    sections.forEach(function (state) {
      if (state.searchable) {
        state.expanded = false;
        render(state);
      }
    });
  });
});
