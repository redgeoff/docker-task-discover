# docker-task-discover

Distributed discovery of docker service tasks


Design
---

TODO: need to modify as nslookup doesn't return task ids and so will need to create service that can be queried for hostname. Can use os.hostname()
- Uses /etc/hosts file in each container to maintain list so that there is no single point of failure
- Provides API, at <host>:<port>, which uses nslookup (via node) to query `tasks.<service-name>` to get list of containers and populates/replaces `<service-name>.<task-id>` entries in /etc/hosts.
- During startup, uses localhost:<port> to discover hosts and then calls <host>:<port> for each of the discovered hosts


Run Tests
---

    $ npm run test