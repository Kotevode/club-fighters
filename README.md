# ClubFighters

A turn-based fighting with Ethereum backend.

Given player<sub>1</sub>, player<sub>2</sub> with HP<sub>1</sub>, HP<sub>2</sub>

Fighting process:
* At the first turn player<sub>0</sub> submits D<sub>E</sub><sup>1</sup> = sha256(name(D<sup>1</sup>) + S<sup>1</sup>) where:
  * D<sup>1</sup> - defence action (BlockHead, BlockBlody, StepBack etc.)
  * name(a) - function that returns name of action
  * S<sup>1</sup> - random string
* At the second turn player<sub>2</sub> submits (D<sub>E</sub><sup>2</sup>, A<sup>2</sup>) where:
  * A<sup>2</sup> - attack action (KickHead, PunchBody etc.)
* At every <i>i > 2</i> turn player<sub>(i mod 2) + 1</sub> submits (D<sup>i - 2</sup>, S<sup>i - 2</sup>, D<sub>E</sub><sup>i</sup>, A<sup>i</sup>). If sha256(name(D<sup>i - 2</sup>) + S<sup>i - 2</sup>) = D<sub>E</sub><sup>i - 2</sup> then (HP<sub>1</sub>, HP<sub>2</sub>) += resolve(D<sub>E</sub><sup>i - 2</sup>, A<sup>i - 1</sup>) where:
  * resolve(D, A) - calculates HP changing produced by action A defenced by action D.
* The fight stops when HP<sub>1</sub> or HP<sub>2</sub> reaches zero.
