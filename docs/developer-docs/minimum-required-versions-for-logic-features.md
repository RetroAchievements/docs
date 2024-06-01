# Minimum Required Versions for Logic Features

Sometimes it's useful to know when a feature was added/changed and the implications of these changes, specially if you are working on a ticket. Compare the ticket timestamp to the toolkit releases to determine which behavior the player would have been subject to.

| Feature                                                   |     RA_Integration     |        RetroArch        |        rcheevos        |
| --------------------------------------------------------- | :--------------------: | :---------------------: | :--------------------: |
| Leaderboard Cancel AND                                    | 0.073<br>(31 Aug 2018) | 1.7.0<br>(25 Dec 2017)  |          n/a           |
| Full 32-bit value support                                 | 0.073<br>(31 Aug 2018) | 1.7.0<br>(25 Dec 2017)  |          n/a           |
| `ResetIf`/`PauseIf` `HitCount`                            | 0.073<br>(31 Aug 2018) | 1.7.4<br>(30 Aug 2018)  |          n/a           |
| Leaderboard OR                                            | 0.073<br>(31 Aug 2018) | 1.7.4<br>(30 Aug 2018)  |          n/a           |
| Delay achievement processing for 100 frames on load       | 0.073<br>(31 Aug 2018) |           n/a           |          n/a           |
| Replace 100 frame delay with delayed activation logic     | 0.075<br>(04 Feb 2019) | 1.6.3<br>(28 Jul 2017)  |          n/a           |
| AndNext                                                   | 0.76<br>(21 Jun 2019)  |  1.7.7<br>(7 May 2019)  |  8.0<br>(4 May 2019)   |
| Prior                                                     | 0.76<br>(21 Jun 2019)  |  1.7.7<br>(7 May 2019)  |  8.0<br>(4 May 2019)   |
| 24-bit read                                               | 0.77<br>(30 Nov 2019)  | 1.8.2<br>(25 Dec 2019)  | 8.0.1<br>(18 Jun 2019) |
| `AddAddress`                                              | 0.77<br>(30 Nov 2019)  | 1.8.2<br>(25 Dec 2019)  |  8.1<br>(21 Nov 2019)  |
| `Measured`                                                | 0.77<br>(30 Nov 2019)  | 1.8.2<br>(25 Dec 2019)  |  8.1<br>(21 Nov 2019)  |
| `Measured` syntax for leaderboard values                  | 0.77<br>(30 Nov 2019)  | 1.8.2<br>(25 Dec 2019)  |  8.1<br>(21 Nov 2019)  |
| Detect and report Unsupported achievements                | 0.79<br>(22 May 2021)  | 1.8.2<br>(25 Dec 2019)  |          n/a           |
| `OrNext`                                                  | 0.78<br>(18 May 2020)  | 1.8.7<br>(17 May 2020)  |  9.0<br>(9 May 2020)   |
| BitCount                                                  | 0.78<br>(18 May 2020)  | 1.8.7<br>(17 May 2020)  |  9.0<br>(9 May 2020)   |
| `MeasuredIf`                                              | 0.78<br>(18 May 2020)  | 1.8.7<br>(17 May 2020)  |  9.0<br>(9 May 2020)   |
| `Trigger`                                                 | 0.79<br>(22 May 2021)  | 1.8.7<br>(17 May 2020)  |  9.0<br>(9 May 2020)   |
| Include hits in save states                               | 0.073<br>(31 Aug 2018) | 1.9.1<br>(28-Mar 2021)  |  9.0<br>(9 May 2020)   |
| SubHits                                                   | 0.79<br>(22 May 2021)  | 1.9.4<br>(29 May 2021)  | 10.0<br>(15 May 2021)  |
| ResetNextIf                                               | 0.79<br>(22 May 2021)  | 1.9.4<br>(29 May 2021)  | 10.0<br>(15 May 2021)  |
| Ranges in rich presence lookups                           | 0.79<br>(22 May 2021)  | 1.9.4<br>(29 May 2021)  | 10.0<br>(15 May 2021)  |
| Maxof($) for `Measured` leaderboard values                | 0.79<br>(22 May 2021)  | 1.9.4<br>(29 May 2021)  | 10.0<br>(15 May 2021)  |
| ResetIf/PauseIf support for `Measured` leaderboard values | 0.79<br>(22 May 2021)  | 1.9.4<br>(29 May 2021)  | 10.0<br>(15 May 2021)  |
| Big Endian memory reads                                   |  1.0<br>(29 Jan 2022)  |  1.9.9<br>(5 Sep 2021)  | 10.2<br>(27 Aug 2021)  |
| `Measured` raw/percent flag                               |  1.0<br>(29 Jan 2022)  |  1.9.9<br>(5 Sep 2021)  | 10.2<br>(27 Aug 2021)  |
| Floating point memory reads                               |  1.0<br>(29 Jan 2022)  | 1.10.1<br>(6 Mar 2022)  | 10.3<br>(14 Jan 2022)  |
| Built-in macros for rich presence                         |  1.0<br>(29 Jan 2022)  | 1.10.1<br>(6 Mar 2022)  | 10.3<br>(14 Jan 2022)  |
| MBF32 LE memory read                                      |  1.1<br>(15 Nov 2022)  | 1.13.0<br>(19 Nov 2022) | 10.5<br>(12 Nov 2022)  |
| XOR modifier                                              |  1.1<br>(15 Nov 2022)  | 1.13.0<br>(19 Nov 2022) | 10.5<br>(12 Nov 2022)  |
| Float BE memory reads                                     |      1.3<br>(TBD)      | 1.17.0<br>(3 Feb 2024)  |  11.0<br>(2 Nov 2023)  |
| FixedN leaderboard/RP sizes                               |      1.3<br>(TBD)      | 1.17.0<br>(3 Feb 2024)  | 11.1<br>(21 Jan 2024)  |
| Double32 memory reads                                     |      1.3<br>(TBD)      |           TBD           | 11.2<br>(31 Mar 2024)  |
