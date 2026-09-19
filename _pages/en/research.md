---
title: "Research | arcSYSu Lab"
lang: en
layout: research
excerpt: "arcSYSu research in program transformation, runtime resource orchestration, and scalable HPC/AI systems."
sitemap: false
permalink: /research
---

<div class="research-content" markdown="0">
  <section class="research-hero">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="research-shell hero-grid">
      <div class="hero-copy">
        <p class="research-eyebrow">Our Research</p>
        <h1>Compilation and Systems for<br><span>Scalable HPC/AI</span></h1>
        <p class="hero-lead">We build compilation and cross-layer systems that help HPC and AI applications adapt to evolving architectures, dynamic resources, and increasing scale.
        </p>
        <div class="hero-links">
          <a class="primary-button" href="#directions">Explore our research</a>
          <a class="research-text-link" href="{{ '/publications' | relative_url }}">View all publications <span>↗</span></a>
        </div>
      </div>
      <div class="framework-card">
        <p class="card-label">A unified systems question</p>
        <h2>How can HPC/AI applications make effective use of modern computing infrastructure?</h2>
        <div class="research-mapping">
          <div>
            <span>Program</span>
            <b>→</b>
            <strong>Architecture</strong>
          </div>
          <div>
            <span>Task</span>
            <b>→</b>
            <strong>Resources</strong>
          </div>
          <div>
            <span>Application</span>
            <b>→</b>
            <strong>Platforms</strong>
          </div>
        </div>
        <p class="framework-note">Transform programs · Orchestrate Resources · Scale applications</p>
      </div>
    </div>
  </section>

  <section class="thesis-strip">
    <div class="research-shell strip-grid">
      <div>
        <span>01</span>
        <strong>Heterogeneous architectures</strong>
        <p>New instructions, memory systems, and accelerators</p>
      </div>
      <div>
        <span>02</span>
        <strong>Dynamic workloads</strong>
        <p>Changing demands, states, and resource constraints</p>
      </div>
      <div>
        <span>03</span>
        <strong>Scalable execution</strong>
        <p>Portable environments, parallel devices, and services</p>
      </div>
    </div>
  </section>

  <section class="research-section research-shell" id="directions">
    <div class="section-head">
      <div>
        <p class="research-eyebrow dark">Research directions</p>
        <h2>One systems question, <br>three connected layers</h2>
      </div>
      <p>Our research spans program transformation, runtime resource management, and complete application execution.
      Together, these layers address the heterogeneity, dynamism, and scale of moden HPC/AI infrastructure.</p>
    </div>
    <div class="area-stack">
      <article class="research-area">
        <div class="area-intro">
          <div class="area-top">
            <span class="area-number">01</span>
            <span class="area-icon code-icon" aria-hidden="true"><i></i><b></b></span>
          </div>
          <p class="area-kicker">Transform programs</p>
          <h3>Program Transformation &amp; Architecture Adaptation</h3>
          <p class="area-question">How can programs adapt to rapidly evolving computing architectures?</p>
          <p class="area-summary">We develop compilation and program-transformation techniques across data organization, intermediate representations, instruction streams, and binary code. Our goal is to help scientific and AI workloads exploit emerging architectural capabilities while remaining efficient and portable across platforms.</p>
          <div class="capability">
            <span>Core capability</span>
            <strong>Architecture adaptability · Code efficiency · Hw/Sw co-design</strong>
          </div>
        </div>
        <div class="area-work">
          <div class="method-row">
            <span>Computation mapping</span>
            <span>Data movement</span>
            <span>IR transformation</span>
            <span>Cross-ISA translation</span>
          </div>
          <div class="paper-grid">
            <div class="research-paper">
              <div>
                <strong>coMulator</strong>
                <span>MICRO 2026</span>
              </div>
              <p>Compilation-assisted cross-architecture translation and emulation</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>GoPTX</strong>
                <span>DAC 2025</span>
              </div>
              <p>PTX-level instruction interleaving for fine-grained GPU kernel fusion</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>HSPref</strong>
                <span>MICRO 2026</span>
              </div>
              <p>Architecture-aware data supply prefetching for ARM SME outer-product workloads</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>HStencil</strong>
                <span>SC 2025</span>
              </div>
              <p>Mapping stencil computation to ARM SME outer-product engines</p>
            </div>
          </div>
        </div>
      </article>
      <article class="research-area">
        <div class="area-intro">
          <div class="area-top">
            <span class="area-number">02</span>
            <span class="area-icon resource-icon" aria-hidden="true"><i></i><i></i><i></i></span>
          </div>
          <p class="area-kicker">Orchestrate resources</p>
          <h3>Adaptive Runtime Resource Orchestration</h3>
          <p class="area-question">How can computation resources respond to changing program behavior and workload demand?</p>
          <p class="area-summary">We manage kernels, loading decisions, GPU sharing, and service-level space–time allocation.
          Our runtime mechanisms move resource provision from fixed configuration toward workload-driven, state-aware, and adaptive orchestration.</p>
          <div class="capability">
            <span>Core capability</span>
            <strong>Resource efficiency · Runtime responsiveness · Service quality</strong>
          </div>
        </div>
        <div class="area-work">
          <div class="method-row">
            <span>Resource extension</span>
            <span>Kernel scheduling</span>
            <span>On-demand loading</span>
            <span>GPU sharing</span>
            <span>Space–time orchestration</span>
          </div>
          <div class="paper-grid">
            <div class="research-paper">
              <div>
                <strong>Bullet</strong>
                <span>ASPLOS 2026</span>
              </div>
              <p>Dynamic spatial-temporal orchestration for improving GPU utilization in LLM serving</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>HuntKTm</strong>
                <span>TACO 2025</span>
              </div>
              <p>Hybrid scheduling and automatic management for efficient GPU kernel execution</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>PaSK</strong>
                <span>DAC 2025</span>
              </div>
              <p>Proactive and selective kernel loading for mitigating inference cold starts</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>SMILE</strong>
                <span>DAC 2024</span>
              </div>
              <p>Extending GPU shared memory with last-level cache capacity</p>
            </div>
          </div>
        </div>
      </article>
      <article class="research-area">
        <div class="area-intro">
          <div class="area-top">
            <span class="area-number">03</span>
            <span class="area-icon nodes-icon" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
          </div>
          <p class="area-kicker">Scale applications</p>
          <h3>Portable and Scalable HPC/AI Execution</h3>
          <p class="area-question">How can complete applications deploy easily and execute efficiently at scale?</p>
          <p class="area-summary">We coordinate software environments, computation, communication, parallel pipelines, and global traffic across the application lifecycle. These mechanisms enable complex HPC/AI applications to move from portable deployment to efficient parallel execution and scalable online service.</p>
          <div class="capability">
            <span>Core capability</span>
            <strong>Environment portability · Parallel efficiency · Distributed scalability</strong>
          </div>
        </div>
        <div class="area-work">
          <div class="method-row">
            <span>Environment reconstruction</span>
            <span>Compute–communication fusion</span>
            <span>Pipeline reconfiguration</span>
            <span>Global flow control</span>
          </div>
          <div class="paper-grid">
            <div class="research-paper">
              <div>
                <strong>coMtainer</strong>
                <span>SC 2025</span>
              </div>
              <p>Compilation-assisted reconstruction of HPC container images for cross-platform adaptability</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>FusedRec</strong>
                <span>AAAI 2026</span>
              </div>
              <p>Compute–communication fusion for distributed recommendation training</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>DynaPipe</strong>
                <span>NeurIPS 2025</span>
              </div>
              <p>Dynamic layer redistribution for efficient pipeline-parallel LLM serving</p>
            </div>
            <div class="research-paper">
              <div>
                <strong>gLLM</strong>
                <span>SC 2025</span>
              </div>
              <p>Global pipeline balancing and token-flow control for distributed LLM serving</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>

  <!--<section class="threads-section">
    <div class="research-shell">
      <div class="section-head light-head">
        <div>
          <p class="research-eyebrow">Connected research</p>
          <h2>Research threads, not isolated projects</h2>
        </div>
        <p>Each system is a point on a longer trajectory. Together, the projects show how ideas mature across architecture, compilation, runtime, and distributed execution.</p>
      </div>
      <div class="thread-grid">
        <article class="research-thread">
          <span class="thread-index">01</span>
          <p class="thread-label">Scientific Computing on New Architectures</p>
          <h3>HStencil → HSPref</h3>
          <p>From computation mapping to architecture-aware data supply on ARM SME.</p>
        </article>

        <article class="research-thread">
          <span class="thread-index">02</span>
          <p class="thread-label">Portable Execution across Architectures</p>
          <h3>coMtainer → coMulator</h3>
          <p>From rebuilding application environments to accelerating cross-ISA execution.</p>
        </article>

        <article class="research-thread">
          <span class="thread-index">03</span>
          <p class="thread-label">Dynamic GPU &amp; LLM Systems</p>
          <h3>SMILE → HuntKTm → PaSK → Bullet</h3>
          <p>From low-level storage and kernel control to service-level resource orchestration.</p>
        </article>

        <article class="research-thread">
          <span class="thread-index">04</span>
          <p class="thread-label">Distributed AI Execution</p>
          <h3>FusedRec → DynaPipe → gLLM</h3>
          <p>Coordinating communication, pipeline stages, and global request flow at scale.</p>
        </article>
      </div>
    </div>
  </section>-->

  <section class="research-section research-shell platform-section">
    <div class="platform-mark" aria-hidden="true">
      Y
    </div>
    <div class="platform-copy">
      <p class="research-eyebrow dark">From frontier research to shared capability</p>
      <h2>YatCC: validation, platformization, and impact</h2>
      <p>YatCC brings our work on compilation, runtime orchestration, and scalable execution into reusable AI-native workspaces and intelligent services. It serves as a living testbed for evaluating systems ideas with real users and workloads, while transforming research outcomes into shared capabilities for scientific research, education, and engineering practice.
      </p>
      <a class="research-text-link" href="https://yatcc-ai.com" target="_blank" rel="noopener">Visit YatCC <span>↗</span></a>
    </div>
    <div class="research-metrics">
      <div>
        <strong>30+</strong>
        <span>AI models</span>
      </div>
      <div>
        <strong>30B+</strong>
        <span>tokens served</span>
      </div>
      <div>
        <strong>700+</strong>
        <span>container instances</span>
      </div>
    </div>
  </section>

  <!--<section class="evidence-section">
    <div class="research-shell evidence-grid">
      <div>
        <p class="research-eyebrow dark">Research ecosystem</p>
        <h2>From technical insight to lasting impact</h2>
      </div>
      <div class="impact-chain">
        <span>Scientific<br>question</span>
        <b>→</b>
        <span>Original<br>mechanism</span>
        <b>→</b>
        <span>System<br>prototype</span>
        <b>→</b>
        <span>Real-world <br>validation</span>
        <b>→</b>
        <span>Platform <br>capability</span>
        <b>→</b>
        <span>Broader <br>impact</span>
      </div>
      <div class="support-grid">
        <p><strong>Research support</strong>National Key R&amp;D Program · National Natural Science Foundation of China</p>
        <p><strong>Industry collaboration</strong>Huawei · Tencent · Xiaomi · Phytium</p>
        <p><strong>Application domains</strong>Scientific computing · AI training · Model serving · Intelligent platforms</p>
      </div>
    </div>
  </section>-->

  <section class="research-cta research-shell">
    <div>
      <p class="research-eyebrow dark">Explore arcSYSu</p>
      <h2>From Architecture to Infrastructure —<br>Turning Insight into Impact.</h2>
    </div>
    <div class="cta-links">
      <a href="{{ '/publications' | relative_url }}">View publications</a>
      <a href="{{ '/people' | relative_url }}">Meet the team</a>
      <a href="{{ '/join' | relative_url }}">Join us</a>
    </div>
  </section>
</div>