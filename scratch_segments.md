
If you happen to have an operations team responsible for getting your code
live, you might also embrace the "not my problem" attitude. This will probably
also lead to a lot of downtimes because of the way you're changing your data
models if you don't care about operational consequences.

---

Red flags are:

* Overloading existing fields to support new features
* Inferring relationships between objects on code
* Joining tables based on data in JSON fields
