---
title: "arcSYSu Lab - Join"
lang: en
layout: join
excerpt: "Join arcSYSu Lab - FAQs"
sitemap: false
permalink: /join
---

{::nomarkdown}
<h1><span class="zh-text">加入 arcSYSu</span><span class="en-text">Join arcSYSu</span></h1>
<div class="subtitle">
  <span class="zh-text">我们构建有意义的系统。从想法 → 设计 → 影响。</span>
  <span class="en-text">We build systems that matter. From ideas → designs → impacts.</span>
</div>

<div class="controls">
  <button id="langBtn" onclick="toggleLang()">English</button>
  <button id="expandBtn" onclick="toggleExpand()">展开全部 / Expand All</button>
  <input id="searchBox" placeholder="Search..." oninput="searchFAQ()" style="width:180px;">
</div>

<div id="faq">

<!-- Q0: Lab Introduction -->
<div class="faq-item" id="q0">
  <div class="question" onclick="toggle(0)">
    <div>
      <span class="qtag zh-text">Q0:</span><span class="zh-text">可否先介绍下lab？</span>
      <span class="qtag en-text">Q0:</span><span class="en-text">Can you briefly introduce the lab?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a0">
    <div class="zh-text">lab名称为arcSYSu，全称是"ARChitecture and SYStem Upscaling @ SYSU"，也是"arcSYSu refines computing system uses"的递归缩写；
简称为ARX，可理解为<b><u>AR</u></b>chitecture and system e<b><u>X</u></b>ploration，或，<b><u>A</u></b>rchitecture <b><u>R</u></b>esearch led by <b><u>X</u></b>ianwei。

arcSYSu是国家超算广州中心（广州超算）下属研究组，研究聚焦GPU系统、编译技术、HPC/AI Infra及基础软件框架，致力于面向HPC/AI等关键场景构建高性能、高扩展、高实用的系统能力。
lab成员是直接接受xianweiz指导的学生（包括与其他老师共同指导学生）。

arcSYSu也是广州超算交叉研究中心（xRC）的一部分，与中心系统方向及其他方向老师的研究组在项目、论文、指导等各方面保持紧密协作。

☆ 注：arcSYSu是<a href="https://xianweiz.github.io/">xianweiz</a>指导的研究小组（research group），不代表超算中心或学院的官方研究团队或大组结构。</div>
    <div class="en-text"><b>arcSYSu</b> (ARChitecture and SYStem Upscaling @ SYSU), also known as <b>ARX</b>, is a research group led by <a href="https://xianweiz.github.io/">Xianwei</a>. The name also forms a recursive acronym: "arcSYSu refines computing system uses."

We focus on GPU systems, compilers, HPC/AI infrastructure, and system software frameworks. Members are students directly advised (or co-advised) by Xianwei.
arcSYSu is also part of the Interdisciplinary Research Center (<b>xRC</b>), with close collaboration across groups in projects, publications, and mentoring.

☆ Note: arcSYSu is an independent research group, not a formal organizational unit.</div>
  </div>
</div>

<!-- Q1: Research Directions -->
<div class="faq-item" id="q1">
  <div class="question" onclick="toggle(1)">
    <div>
      <span class="qtag zh-text">Q1:</span><span class="zh-text">能简单谈一谈你的研究方向吗？</span>
      <span class="qtag en-text">Q1:</span><span class="en-text">What are your research directions?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a1">
    <div class="zh-text">主要研究方向是计算机系统、GPU、编译等，关注如何围绕前沿高性能（HPC）和智能应用（AI/LLM/Agent）需求来设计和优化计算机系统以提升整体性能与可用性；
此外，lab涉及其他研究方向也包括HPC应用及AI等，会更多偏向于算法和业务，但又基本都涉及到系统层面。

大概的研究流程是"应用出发 - 系统设计 - 回到应用"：
- 分析应用程序，确定性能瓶颈；
- 设计软件或硬件层面解决方案；
- 实现并验证方案有效性。

常用工具是profiler（e.g.，nvprof/rocprof）、clang/LLVM、CUDA/ROCm Runtime、docker/container、K8s、vLLM/SGLang等；
常用语言是C/C++, Python, Bash, CUDA/HIP/OpenCL等。

☆ 当前重点：Agent时代的智能计算系统，涵盖：CPU/GPU、编译运行时、系统平台与应用优化等。</div>
    <div class="en-text">We work on computer systems, GPU architectures, and compilers, with an emphasis on optimizing systems for HPC and modern AI workloads (LLMs, agents, etc.).

Our typical workflow is, Application → System Design → Back to Application:
Analyze workloads and identify bottlenecks;
Design system/software/hardware optimizations;
Implement and validate improvements.

We also explore HPC applications and AI workloads, often spanning both systems and algorithms.

Typical tools and stack: profilers (nvprof/rocprof), LLVM/Clang, CUDA/ROCm, containers/K8s, and LLM frameworks (e.g., vLLM, SGLang).
Common languages: C/C++, Python, Bash, CUDA/HIP/OpenCL.

☆ Current focus areas: GPU systems, compilers, ML systems, HPC platforms, and application acceleration.</div>
  </div>
</div>

<!-- Q2: Hardware-oriented? -->
<div class="faq-item" id="q2">
  <div class="question" onclick="toggle(2)">
    <div>
      <span class="qtag zh-text">Q2:</span><span class="zh-text">你的方向是不是很"硬件"？</span>
      <span class="qtag en-text">Q2:</span><span class="en-text">Is your research hardware-oriented?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a2">
    <div class="zh-text">我们的研究虽接近硬件，但主要以"软件"的方法研究"软硬件"系统和应用性能优化，强调从"算法-软件-硬件"全栈知识体系和技能，但通常并不会涉及底层实现和电路。

组内重点关注的学术会议包括：SC/ASPLOS/HPCA/ISCA/MICRO/PPoPP/SOSP/OSDI/CGO/NeurlIPS/AAAI/ICLR等。</div>
    <div class="en-text">Not exactly.
While our work is close to hardware, we primarily take a systems/software approach to optimize hardware–software co-design.

We emphasize a full-stack perspective (algorithm → software → hardware), but typically do not involve circuit-level design.

Representative conferences to follow include:
SC, ASPLOS, HPCA, ISCA, MICRO, PPoPP, SOSP, OSDI, CGO, NeurIPS, AAAI, ICLR.</div>
  </div>
</div>

<!-- Q3: What do you look for in students? -->
<div class="faq-item" id="q3">
  <div class="question" onclick="toggle(3)">
    <div>
      <span class="qtag zh-text">Q3:</span><span class="zh-text">你招学生最看重哪些方面？</span>
      <span class="qtag en-text">Q3:</span><span class="en-text">What do you look for in students?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a3">
    <div class="zh-text">我们更看重"潜力与驱动力"（potential & motivation），而非已有经验：
- 踏实上进的态度、良好的自我能驱动性（self-motivated）；
- 有对自我优秀的追求，而非仅仅提升学历或满足毕业要求；
- 对计算机系统及应用有兴趣（e.g., 好奇程序全栈执行过程）；
- 有扎实的计算机基础，熟练掌握1-2门编程语言（注：并不需要熟悉Q1/A1提到的工具或语言）；

☆ 彼此聊得来，style match，双方预计可以合作愉快。</div>
    <div class="en-text">Self-motivated and disciplined;
A drive for excellence, beyond degree requirements;
Interest in systems and real-world applications;
Solid CS fundamentals and proficiency in 1–2 programming languages;
Good fit and communication style (mutual).

☆ Prior experience with our specific tools is NOT required.</div>
  </div>
</div>

<!-- Q4: Why choose you as advisor? -->
<div class="faq-item" id="q4">
  <div class="question" onclick="toggle(4)">
    <div>
      <span class="qtag zh-text">Q4:</span><span class="zh-text">选择你作为导师，有何优势？</span>
      <span class="qtag en-text">Q4:</span><span class="en-text">Why choose you as an advisor?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a4">
    <div class="zh-text">在国内外工业界、学术界和管理机构都有过经历，能够从更实用、长远和综合的角度培养指导，及在就业/深造上给予建议；
坚信导师应该与学生共同成长，会亲自指导培养；
有一定的合作资源，可以推荐到国内外高校或企业；
平台优势明显，拥有国际一流的软硬件资源与前沿科研项目。

[Reminder: 以上优势及以下QA可能本身亦是劣势，关键看是否match，请结合个人情况与组内学生反馈综合判断]</div>
    <div class="en-text">Experience across industry, academia, and management organizations
Emphasis on practical, long-term, and well-rounded training;
Hands-on mentoring throughout the research process;
Access to collaborations and strong recommendation channels;
Strong platform with state-of-the-art resources and projects.

☆ Note: these can also be downsides depending on your expectations—fit matters.</div>
  </div>
</div>

<!-- Q5: How do you mentor students? -->
<div class="faq-item" id="q5">
  <div class="question" onclick="toggle(5)">
    <div>
      <span class="qtag zh-text">Q5:</span><span class="zh-text">具体来讲，你会怎么指导学生？</span>
      <span class="qtag en-text">Q5:</span><span class="en-text">How do you mentor students?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a5">
    <div class="zh-text">选题：结合科研项目、学生背景和兴趣帮助选定方向，共同研读讨论文献；
研究：指导研究开展，每周1x1小方向组讨论，平等沟通；
能力：培养动手实践、独立思考、双向沟通和团队协作；
眼界：鼓励对外交流，支持参加国内外会议和活动。

另，我所认同的advisor/advisee relationship，供参考:
[Harcol@CMU, https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf]
[Herman@ColumbiaU, https://www.nature.com/articles/nj7124-228a]</div>
    <div class="en-text">Topic selection: aligned with projects, background, and interests;
Research: structured guidance with weekly 1-on-1 / group discussions;
Skills: hands-on ability, independent thinking, communication, teamwork;
Exposure: encouraged to attend conferences and engage externally.

I follow a collaborative advisor–advisee model, where:
we work side-by-side, learn from each other, and make discoveries together.

(See references from <a href="https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf">Harcol@CMU</a> and <a href="https://www.nature.com/articles/nj7124-228a">Herman@ColumbiaU</a> for more details.)</div>
  </div>
</div>

<!-- Q6: Training goals -->
<div class="faq-item" id="q6">
  <div class="question" onclick="toggle(6)">
    <div>
      <span class="qtag zh-text">Q6:</span><span class="zh-text">你对学生有什么总体培养目标？</span>
      <span class="qtag en-text">Q6:</span><span class="en-text">What are your training goals?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a6">
    <div class="zh-text">系统（或者说计算机）方向天然是全栈性的，因而应该努力兼顾"专"和"广"。
- 专（Depth）：成为某一个方向或子领域的专家
- 广（Breadth）：建立从算法到系统的全面认知
关于毕业标准，并无量化要求（例如，几篇论文、什么级别），但总体认同研究生阶段需要在实践、研究、沟通和综合能力上获得质的提升（Be Professional，Do Smart, Show Impact），
且应该在个人简历中的项目和研究方面有直接的体现，在就业市场和长远发展要具有相当的竞争力（专业技术，以及更多方面）。

[Reminder：以上目标和要求可能并不容易达到，plz think twice]</div>
    <div class="en-text">Systems research is inherently full-stack, so we aim for both:
Depth: expertise in a focused area
Breadth: end-to-end understanding (algorithm → system)

There are no hard publication quotas, but students are expected to achieve substantial growth in:
research, engineering, communication, and overall professionalism.

Your work should translate into strong, visible outcomes (projects, papers, systems), enabling competitiveness in both academia and industry.

☆ Note: the expectations are NOT that easy to reach—please consider carefully.</div>
  </div>
</div>

<!-- Q7: Internships and industry -->
<div class="faq-item" id="q7">
  <div class="question" onclick="toggle(7)">
    <div>
      <span class="qtag zh-text">Q7:</span><span class="zh-text">你怎么看待实习与工业界？</span>
      <span class="qtag en-text">Q7:</span><span class="en-text">How do you view internships and industry?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a7">
    <div class="zh-text">计算机的研究是紧密联系产业界的，而实习是了解业界前沿、提升能力的绝佳方式，所以实习是鼓励的（当然，最好是和自己所作方向相关；同时，做好提前规划和沟通）；
公司实习和学校研究不应该是相互对立，相反应该是互为补充，共同支撑研究生阶段的能力培养提升；
另，学术界和工业界都有很好地平台和机会，所以更多是个人选择，并无优劣之分。

☆ 我总体认同未来是高度不确定的，要保留更多的可能性，有更高的眼界和视野，把路尽量走宽，而不要迫不得已（Be Prepared, Be Open）。</div>
    <div class="en-text">Internships are strongly encouraged, especially when aligned with your research.

We see industry and academia as complementary, not competing:
industry provides scale and real-world exposure;
academia provides depth and rigor.

Both paths offer excellent opportunities—this is ultimately a personal choice.

Be Prepared, Be Open.</div>
  </div>
</div>

<!-- Q8: Career paths -->
<div class="faq-item" id="q8">
  <div class="question" onclick="toggle(8)">
    <div>
      <span class="qtag zh-text">Q8:</span><span class="zh-text">如果选择去工业界，有哪些合适的选择？</span>
      <span class="qtag en-text">Q8:</span><span class="en-text">What career paths do your students pursue?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a8">
    <div class="zh-text">作为一个熟悉全栈系统和应用、兼顾"专"和"广"的毕业生，选择面很宽：
- 可以去相对偏系统的公司（e.g.,华为、AMD和Nvidia等）从事架构或系统相关的研发设计；
- 也可以去互联网公司（e.g.,字节、腾讯、阿里、Google）从事软硬件研发；
- 当然，针对HPC/AI等领域应用加速的startups也是很好地选择。</div>
    <div class="en-text">Graduates with full-stack systems expertise have broad options, including:
System/architecture roles (e.g., Huawei, AMD, NVIDIA);
Software/hardware engineering in leading tech companies (e.g., ByteDance, Tencent, Alibaba, Google);
Startups in HPC/AI infrastructure and acceleration.</div>
  </div>
</div>

<!-- Q9: Lab statistics -->
<div class="faq-item" id="q9">
  <div class="question" onclick="toggle(9)">
    <div>
      <span class="qtag zh-text">Q9:</span><span class="zh-text">组内有无样本数据供参考？</span>
      <span class="qtag en-text">Q9:</span><span class="en-text">Lab statistics?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a9">
    <div class="zh-text">目前组内博士和硕士研究生24人（2021 - 2025级），预计未来也会维持在20人左右规模；
在读期间大多有实习经历（NV、Intel、ALI、字节、腾讯、华为、阿里、Kimi等）；
已毕业硕士生8人，首份单位去向为Intel、HKUST(GZ)、Nvidia、Huawei、MetaX、字节、京东、选调；
截止到目前，约1/3硕士选择攻读PhD（毕业后读博+硕转博）；
另有各年级本科生若干。

更多信息请查阅<a href="https://arcsysu.tech/">https://arcsysu.tech/</a>相关页面。</div>
    <div class="en-text">~24 current PhD/MS students (2021–2025), expected steady at ~20;
Most students have internship experience (NVIDIA, Intel, Alibaba, ByteDance, Tencent, Kimi, Huawei, etc.);
8 MS graduates so far, placed at Intel, HKUST(GZ), NVIDIA, Huawei, MetaX, JD, etc.;
~1/3 pursue PhD (directly or after MS);
A few undergraduate researchers each year.

See more at: <a href="https://arcsysu.tech/">https://arcsysu.tech/</a></div>
  </div>
</div>

<!-- Q10: Undergraduates -->
<div class="faq-item" id="q10">
  <div class="question" onclick="toggle(10)">
    <div>
      <span class="qtag zh-text">Q10:</span><span class="zh-text">本科生可以加入lab吗?</span>
      <span class="qtag en-text">Q10:</span><span class="en-text">Can undergraduates join the lab?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a10">
    <div class="zh-text">可以，且非常欢迎。
如果你对lab研究方向感兴趣，且学有余力/积极主动，欢迎加入到lab学习交流；
但需提醒：本科阶段更多要全面发展，提升全栈知识体系和技能，不必过早限定方向（你无法在这个阶段笃定自己一定做什么或者一定不做什么^_^）；
lab的参与更多是课堂学习的延伸，你需要主动学习、积极交流、开阔眼界，发掘自己的兴趣和潜力。

原则上，你需要积极参与到lab至少一学期（组会、讨论、竞赛等），且得到大家的认可后，才officially成为arcSYSu一员（即，作为Ug/RA）。</div>
    <div class="en-text">Yes—motivated undergraduates are welcome.

That said:
Prioritize broad fundamentals and full-stack skills;
Avoid locking into a narrow direction too early;
Treat lab participation as an extension of coursework.

To officially join (as UG/RA), you are expected to:
Actively participate for at least one semester;
Engage in meetings, discussions, or projects;
Be recognized by the group.</div>
  </div>
</div>

<!-- Q11: Contact -->
<div class="faq-item" id="q11">
  <div class="question" onclick="toggle(11)">
    <div>
      <span class="qtag zh-text">Q11:</span><span class="zh-text">怎么进一步联系？</span>
      <span class="qtag en-text">Q11:</span><span class="en-text">How can I contact you?</span>
    </div>
    <span class="arrow">▶</span>
  </div>
  <div class="answer" id="a11">
    <div class="zh-text">发送邮件至zhangxw79[at]mail.sysu.edu.cn，可以安排当面或电话沟通；
同时，建议查阅<a href="https://arcsysu.tech/">https://arcsysu.tech/</a>联系组内学生，可以了解到更全面客观和综合信息以做判断。</div>
    <div class="en-text">Email: zhangxw79@mail.sysu.edu.cn

We can have a coffee chat in person or have virtual meeting.
You are also encouraged to contact current students via the website: <a href="https://arcsysu.tech/">https://arcsysu.tech/</a>.</div>
  </div>
</div>

</div>

<div id="toc"></div>
{:/nomarkdown}