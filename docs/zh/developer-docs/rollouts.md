# Rollouts

## 简介

Rollouts 是旨在模拟主机发布的活动。参与 Rollouts 的开发者投入时间为成就集工作，目标是在主机对所有玩家开放支持时准备好多个成就集。

## 通用指南

值得注意的是，这些是适用于所有 Rollouts 的通用指南。个别 Rollout 可能需要额外指南。

- 每个 Rollout 需要协调员/管理员处理各种任务，确保 Rollout 顺利进行。

  - 协调员/管理员的任务
    - 评估成就开发者的参与兴趣。
    - 跟踪认领情况，确保无重叠并让认领管理员了解最新状态。
    - 与参与者保持密切沟通，回答问题并解决可能出现的冲突。
    - 向技术团队报告模拟器/核心错误及其他问题。
    - 如适用，向 RANews 团队提供必要信息。
    - 维护时间表，让开发者知道何时在论坛正式认领选择、何时测试人员可开始测试成就集、以及主机支持何时正式上线。
    - 确保主机支持上线时网站验证主机 ID，或至少与网站团队保持联系以完成验证。

- 开发者一次只能主导一个成就集，但可同时协作另一个成就集，只要不是其主要认领。认领须经 Rollout 和 Writing 团队签字，协作认领需所有部分完成后才能签字。签字后可申请另一认领。

- Rollout 认领受[特殊认领](/zh/guidelines/developers/claims-system#special-claims)规则约束。

- 根据开发者行为准则，开发者须无未处理工单才能锁定认领。他们还必须有空闲的认领槽位。

- 由于 Rollout 的总体目标是在主机支持上线时提供成就集，若开发者不活跃或未在所选成就集上工作，其认领将被失效。换言之，认领成就集后闲置是不可接受的，将导致失效。

- 若 Rollout 期间主要 Rollout 认领被放弃，该认领将暂时不可用。Rollout 团队会与所有 Rollout 参与者讨论此认领，感兴趣的开发者将进入抽签。当然，你当前的优先认领仍须完成才能接手。与常规认领一样，若有怀疑为让朋友认领而囤积认领的行为，将被移出 Rollout 参与并受到下次 Rollout 的处罚。

- 若你的 Rollout 认领之一是协作，其中一名参与开发者打算做一个或多个子集，而另一名开发者无意参与，则核心集签字后，该认领将为他们释放。当然，打算做子集的开发者仍须优先完成核心集，以免其他开发者无法开发其他游戏。若非如此，协作伙伴可联系 Rollout 团队。

- 若 Rollout 期间出现不当行为，如拒绝与相关团队合作或给其他开发者造成问题，Rollout 团队可采取补救措施。这可能包括降低未来 Rollout 认领选择的优先级，或在当前 Rollout 期间移除认领。

## Rollout 流程

- **步骤 1：新集成提案** - 管理团队研究可用核心或联系独立模拟器开发者。同样，模拟器开发者可通过站内消息联系 RAdmin，提议为其模拟器或核心提供支持。该提案将由管理团队评估，若接受，将指导开发者在其模拟器中构建 RetroAchievements 集成。
- **步骤 2：构建成就支持** - 集成开发者在模拟器中构建成就支持，包括任何新系统的哈希支持。此过程可能需要数月甚至数年。
- **步骤 3：集成测试** - Rollout 团队测试新支持以发现任何问题，并向集成开发者提供反馈。此步骤期间也可能进行公开测试，以征求所有成就开发者的反馈。
- **步骤 4：Rollout 选择** - Rollout 团队和 RAdmin 对集成满意后，私下联系开发者了解参与兴趣。开发者将提供优先选择、备选选择或完全不选。收集所有选择后，所有开发者姓名进入抽签，按以下优先级选择：
  - 1：参与上次 Rollout 并按时发布成就集的开发者，以及（新）从未参与任何 Rollout 的开发者。
  - 2：未参与上次 Rollout 但参与过其他 Rollout 的开发者。
  - 3：在上次参与的 Rollout 中收到大量工单或潜在成就集降级，或远超 Rollout 结束日期才发布 Rollout 成就集的开发者。此优先级将逐案判断。
  - 4：至少有一个开放工单且超过一个月无进展的开发者。
- **步骤 5：选择规划** - Rollout 团队评估选择。若某游戏有多个优先选择，团队将与感兴趣的开发者合作鼓励协作。注意：开发者限于一个优先认领（单独或协作），但可加入另一开发者的主要认领寻找协作伙伴，一次一个。
- **步骤 6：锁定** - 开发者被告知其优先选择是否确认。RAdmin 将为确认的游戏添加哈希，开发者可发起认领。认领在 Rollout 期间将成为免费 Rollout 特殊认领。Rollout 团队会提前告知开发者 Rollout 结束日期以便规划。该结束日期旨在作为新系统/模拟器支持的**实际发布日期**，但发布日期前一个月会征求开发者意见，讨论是否同意 Rollout 满足技术预期。若非如此，日期可能推迟。
- **步骤 7：成就集开发** - 开发者开始在其认领上工作。开发者应在此期间积极工作，Rollout 团队会沟通检查日期。若步骤 4 未向 Rollout 团队提供优先选择，开发者现在可联系 Rollout 团队申请成就集。
- **步骤 8：签字** - 开发者提交完成的认领供审核，通过 ping Writing 团队进行初步检查，使成就集符合[写作政策](/zh/guidelines/content/writing-policy)。Writing 团队成员会私下与你讨论必要修改，请确保给他们空间，如通过 Discord 私信。检查完成后，他们将 ping Rollout 团队，检查[成就集要求](/zh/guidelines/content/achievement-set-requirements)。注意：协作须在所有协作者完成其部分后才能签字。
- **步骤 9：额外认领** - 开发者在其初始认领签字后可进行新认领，或协作签字后可加入另一协作。一次只能有一个主要认领和一个非主要协作认领。
- **步骤 10：发布准备** - Rollout 接近完成时，联系 RANews 和活动团队等其他团队，以便他们进行与 Rollout 相关的准备。
- **步骤 11：发布日** - 新系统发布，开发者推广其成就集，或若开发者不可用，RAdmin 将推广新成就集。玩家现在可以玩采用新系统的成就集！注意：对开发者而言，签字期将在发布日后持续一个月，意味着成就集仍须经 Writing 和 Rollout 团队检查。

## 以往 Rollouts

| Launch Date |                            Console                            | Number of Sets on Launch Day |                           Relevant Links                           |
| :---------: | :-----------------------------------------------------------: | :--------------------------: | :----------------------------------------------------------------: |
| 2019-09-07  |                          PlayStation                          |              28              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=9302)  |
| 2021-10-01  |                     PlayStation Portable                      |              38              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=14016) |
| 2022-02-12  |                           Dreamcast                           |              34              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=15276) |
| 2022-03-28  |                          Amstrad CPC                          |              30              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=15835) |
| 2022-05-08  |                       Arduboy<br>WASM-4                       |           38<br>25           | [Forum Topic](http://retroachievements.org/viewtopic.php?t=16456)  |
| 2022-07-28  |               Fairchild Channel F<br>Mega Duck                |           21<br>18           | [Forum Topic](https://retroachievements.org/viewtopic.php?t=17590) |
| 2022-10-01  |                         PlayStation 2                         |              92              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=11108) |
| 2023-04-16  |                         Nintendo DSi                          |              45              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=21246) |
| 2023-06-04  |                        Atari Jaguar CD                        |              12              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=21898) |
| 2023-07-01  | Interton VC 4000<br>Elektor TV Games Computer<br>Arcadia 2001 |        31<br>23<br>22        | [Forum Topic](https://retroachievements.org/viewtopic.php?t=22335) |
| 2023-08-12  |                            Uzebox                             |              30              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=22887) |
| 2023-11-15  |                          Neo Geo CD                           |              23              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=24443) |
| 2024-07-15  |                           GameCube                            |             107              | [Forum Topic](https://retroachievements.org/viewtopic.php?t=27191) |
|   Pending   |                              Wii                              |              ??              |                              Pending                               |
|   Pending   |                            MS-DOS                             |              ??              |                              Pending                               |
|   Pending   |                          ZX Spectrum                          |              ??              |                              Pending                               |
|   Pending   |                              3DS                              |              ??              |                              Pending                               |
|   Pending   |                         Commodore 64                          |              ??              |                              Pending                               |
|   Pending   |                             TI-83                             |              ??              |                              Pending                               |
