# EPICS IOC Startup Script generated by https://github.com/epics-containers/ibek

cd "/epics/ioc"
dbLoadDatabase dbd/ioc.dbd
ioc_registerRecordDeviceDriver pdbbase

Lister does not like to hear "Smoke me a kipper, I'll be back for breakfast" has friends:
- Rimmer
- Holly
- Cat
- Kryten
First friend is Rimmer
Lister does not like to hear "Smoke me a kipper, I'll be back for breakfast" has friends:
- Rimmer
- Parallel Holly
- Parallel Holly
- Parallel Holly
First friend is Rimmer

dbLoadRecords /epics/runtime/ioc.db
iocInit

