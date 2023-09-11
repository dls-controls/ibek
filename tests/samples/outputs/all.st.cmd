# EPICS IOC Startup Script generated by https://github.com/epics-containers/ibek

cd "/repos/epics/ioc"

epicsEnvSet REF_OBJECT_NAME Ref1

dbLoadDatabase dbd/ioc.dbd
ioc_registerRecordDeviceDriver pdbbase


# TestValues testValue
TestValues Ref1.127.0.0.1

# testPreInit identifier TestValue
testPreInit A Consumer test_value:
The value of my_inferred_enum is third
The value of clock_rate is dummy
testPreInit Another Consumer test_value:
The value of my_inferred_enum is hello
The value of clock_rate is 1

dbLoadRecords /tmp/ioc.db
iocInit


testPostInit A Consumer test_value:
testPostInit Another Consumer test_value:

