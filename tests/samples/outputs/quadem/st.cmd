# EPICS IOC Startup Script generated by https://github.com/epics-containers/ibek

cd "/epics/ioc"
dbLoadDatabase dbd/ioc.dbd
ioc_registerRecordDeviceDriver pdbbase

drvAsynIPPortConfigure(XBPM1.DRVip, 172.23.103.85:10001, 100, 0, 0)
asynOctetSetInputEos(XBPM1.DRVip, 0, "\r\n")
asynOctetSetOutputEos(XBPM1.DRVip, 0, "\r")

# drvTetrAMMConfigure(portName, IPportName, RingSize)
drvTetrAMMConfigure("XBPM1.DRV", "XBPM1.DRVip", 10000)

################################################################################
# Just demonstrating that Entities can have their own pre_init AND SubEntities.
# This is the pre_init for quadem.Plugins device with id XBPM1
################################################################################

#
# ADCore path for manual NDTimeSeries.template to find base plugin template
epicsEnvSet "EPICS_DB_INCLUDE_PATH", "$(ADCORE)/db"

# NDStatsConfigure(portName, queueSize, blockingCallbacks, NDArrayPort, NDArrayAddr, maxBuffers, maxMemory, priority, stackSize, maxThreads)
NDStatsConfigure("XBPM1.STATS.I1", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
# NDTimeSeriesConfigure(portName, queueSize, blockingCallbacks, NDArrayPort, NDArrayAddr, maxSignals, maxBuffers, maxMemory, priority, stackSize)
NDTimeSeriesConfigure("XBPM1.STATS.I1_TS", 2, 0, "XBPM1.STATS.I1", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.I2", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.I2_TS", 2, 0, "XBPM1.STATS.I2", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.I3", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.I3_TS", 2, 0, "XBPM1.STATS.I3", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.I4", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.I4_TS", 2, 0, "XBPM1.STATS.I4", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.SumX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.SumX_TS", 2, 0, "XBPM1.STATS.SumX", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.SumY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.SumY_TS", 2, 0, "XBPM1.STATS.SumY", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.SumAll", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.SumAll_TS", 2, 0, "XBPM1.STATS.SumAll", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.DiffX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.DiffX_TS", 2, 0, "XBPM1.STATS.DiffX", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.DiffY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.DiffY_TS", 2, 0, "XBPM1.STATS.DiffY", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.PosX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.PosX_TS", 2, 0, "XBPM1.STATS.PosX", 1, 23, 0, 0, 0, 0)
NDStatsConfigure("XBPM1.STATS.PosY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDTimeSeriesConfigure("XBPM1.STATS.PosY_TS", 2, 0, "XBPM1.STATS.PosY", 1, 23, 0, 0, 0, 0)
# NDStdArraysConfigure(portName, queueSize, blockingCallbacks, NDArrayPort, NDArrayAddr, maxBuffers, maxMemory, priority, stackSize, maxThreads)
NDStdArraysConfigure("XBPM1.ARRAYS.Arr1", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.Arr2", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.Arr3", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.Arr4", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.SumX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.SumY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.SumAll", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.DiffX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.DiffY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.PosX", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)
NDStdArraysConfigure("XBPM1.ARRAYS.PosY", 2, 0, "XBPM1.DRV", 0, 0, 0, 0, 0, 1)

dbLoadRecords /epics/runtime/ioc.db
iocInit


# Increase precision of sample time for TetrAMM
dbpf("BL03I-EA-XBPM-01:DRV:SampleTime_RBV.PREC", "5")

