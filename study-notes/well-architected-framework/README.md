# 🏗️ Well-Architected Framework

- [Documentation](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [Whitepapers](https://aws.amazon.com/architecture/well-architected/?ref=wellarchitected-wp)

The **AWS <u>Well-Architected Framework</u>** helps teams design secure, reliable, efficient, cost-effective, and sustainable systems in the cloud.

It provides:

- A consistent way to review and improve architectures.
- Best practices and strategies drawn from AWS Solutions Architects’ real-world experience.
- Guidance through foundational questions to check alignment with cloud best practices.

Around this framework, AWS also offers:

* The [**Well-Architected Tool**](https://aws.amazon.com/well-architected-tool/?ref=wellarchitected-wp) – a cloud service that provides a consistent process to review and assess your architecture.
* [**Well-Architected Labs**](https://www.wellarchitectedlabs.com/?ref=wellarchitected-wp) – hands-on learning resources to practice best practices.
* An ecosystem of **AWS Partners** – experts who can help review and improve your workloads.

## General design principles

The Well-Architected Framework identifies a set of general design principles to facilitate good design in the cloud:

- **Don’t guess capacity:** If you make a poor capacity decision when deploying a workload, you might end up sitting on expensive <u>idle resources</u> or dealing with the performance implications of <u>limited capacity</u>. With cloud computing you <u>scale up/down automatically instead of over/under-provisioning</u>.
- **Test at production scale:** Simulate your live environment for a fraction of the cost of testing on premises by spinning up full test environments on demand, and paying only while they run.
- **Automate:** Automation gives you the possibility of creating and replicating your workloads at low cost. Use automation for repeatability, low-cost experimentation, and easy rollback.
- **Evolving architectures:** Traditional architectures are often static, making it hard to adapt as <u>business needs change</u>. In the cloud, automation and on-demand testing reduce the risk of changes, allowing systems to <u>evolve continuously</u> and take advantage of new innovations.
- **Use data:** Your <u>cloud infrastructure is code</u>, so you can use that data to inform your architecture choices and improvements over time.
- **Run game days:** Simulate real events regularly to find weaknesses and build resilience. This will help you understand where improvements can be made and can help develop <u>organizational experience in dealing with events</u>.

## The pillars of the framework

The **AWS Well-Architected Framework** is built on <u>**six pillars**</u>. These pillars provide a strong foundation for creating stable, efficient, and effective systems, allowing teams to confidently focus on delivering functional requirements and business value.

- [**Operational excellence**](operational-excellence/README.md)

- [**Security**](security/README.md)

- [**Reliability**](reliability/README.md)

- [**Performance efficiency**](performance-efficiency/README.md)

- [**Cost optimization**](cost-optimization/README.md)

- [**Sustainability**](sustainability/README.md)

# The review process

- **Reviews should be lightweight, blame-free, and conversational**—meant to spot critical issues or improvements, not audits.
- **Teams and each member should own their own architecture quality** and should use the AWS Well-Architected Framework <u>continuously</u>, not just in formal reviews.
- **The framework aligns with AWS internal practices**—its design principles guide architecture, and its <u>questions focus on areas often featured in Root Cause Analyses (RCA)</u> to continuously improve review processes.
- **Conduct reviews at key milestones:** early in the design phase to <u>prevent irreversible (“one-way door”) decisions, before going live, and whenever major architecture changes occur</u>. Many decisions are reversible (“two-way doors”) and can use a lighter review process, but one-way doors require more careful inspection.
- **Conducting reviews:**
    - Begin with <u>informal conversations</u> to understand the architecture and gather most answers. Follow up with one or two focused meetings to clarify ambiguities or dive deeper into perceived risks.
    - Ensure <u>all key stakeholders are involved</u>, especially if this is a one-time or independent review.
    - Prepare meeting aids: whiteboards, diagrams or design notes, and an action list for questions that need further research (e.g., “Did we enable encryption?”).
- **Outcome of reviews:** a prioritized list of issues that considers business context and team impact; addressing these issues early helps reduce recurring problems and frees up time to focus on creating business value.
- **Handling resistance to reviews:**
    - *“<u>We are too busy</u>”* – Reviews help uncover hidden problems early, reducing the risk of issues during major launches..
    - *“<u>We don’t have time to act on the results</u>”* – Even if immediate fixes aren’t possible, knowing the risks lets you create playbooks or contingency plans for critical events.
    - *“<u>We don’t want others to know our implementation secrets</u>”* – Well-Architected Framework questions focus on architecture quality and risk areas without revealing commercial or technical proprietary information.
- **Across multiple reviews**, <u>look for recurring (thematic) issues</u> and address them holistically with training, mechanisms, or engineering guidance.

**Do small, continuous, blame-free architecture reviews with the Well-Architected Framework to catch risks early, improve over time, and free teams to deliver business value.**
