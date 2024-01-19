window.SIDEBAR_ITEMS = {"constant":["ZDICT_CONTENTSIZE_MIN","ZDICT_DICTSIZE_MIN","ZSTD_BLOCKSIZELOG_MAX","ZSTD_BLOCKSIZE_MAX","ZSTD_BLOCKSIZE_MAX_MIN","ZSTD_CHAINLOG_MAX_32","ZSTD_CHAINLOG_MAX_64","ZSTD_CHAINLOG_MIN","ZSTD_CLEVEL_DEFAULT","ZSTD_CONTENTSIZE_ERROR","ZSTD_CONTENTSIZE_UNKNOWN","ZSTD_FRAMEHEADERSIZE_MAX","ZSTD_HASHLOG_MIN","ZSTD_LDM_BUCKETSIZELOG_MAX","ZSTD_LDM_BUCKETSIZELOG_MIN","ZSTD_LDM_HASHLOG_MIN","ZSTD_LDM_HASHRATELOG_MIN","ZSTD_LDM_MINMATCH_MAX","ZSTD_LDM_MINMATCH_MIN","ZSTD_MAGICNUMBER","ZSTD_MAGIC_DICTIONARY","ZSTD_MAGIC_SKIPPABLE_MASK","ZSTD_MAGIC_SKIPPABLE_START","ZSTD_MINMATCH_MAX","ZSTD_MINMATCH_MIN","ZSTD_OVERLAPLOG_MAX","ZSTD_OVERLAPLOG_MIN","ZSTD_SEARCHLOG_MIN","ZSTD_SKIPPABLEHEADERSIZE","ZSTD_SRCSIZEHINT_MIN","ZSTD_TARGETCBLOCKSIZE_MAX","ZSTD_TARGETCBLOCKSIZE_MIN","ZSTD_TARGETLENGTH_MAX","ZSTD_TARGETLENGTH_MIN","ZSTD_VERSION_MAJOR","ZSTD_VERSION_MINOR","ZSTD_VERSION_NUMBER","ZSTD_VERSION_RELEASE","ZSTD_WINDOWLOG_LIMIT_DEFAULT","ZSTD_WINDOWLOG_MAX_32","ZSTD_WINDOWLOG_MAX_64","ZSTD_WINDOWLOG_MIN"],"enum":["ZSTD_EndDirective","ZSTD_ErrorCode","ZSTD_ResetDirective","ZSTD_cParameter","ZSTD_dParameter","ZSTD_dictAttachPref_e","ZSTD_dictContentType_e","ZSTD_dictLoadMethod_e","ZSTD_forceIgnoreChecksum_e","ZSTD_format_e","ZSTD_frameType_e","ZSTD_literalCompressionMode_e","ZSTD_nextInputType_e","ZSTD_paramSwitch_e","ZSTD_refMultipleDDicts_e","ZSTD_sequenceFormat_e","ZSTD_strategy"],"fn":["ZDICT_addEntropyTablesFromBuffer","ZDICT_finalizeDictionary","ZDICT_getDictHeaderSize","ZDICT_getDictID","ZDICT_getErrorName","ZDICT_isError","ZDICT_optimizeTrainFromBuffer_cover","ZDICT_optimizeTrainFromBuffer_fastCover","ZDICT_trainFromBuffer","ZDICT_trainFromBuffer_cover","ZDICT_trainFromBuffer_fastCover","ZDICT_trainFromBuffer_legacy","ZSTD_CCtxParams_getParameter","ZSTD_CCtxParams_init","ZSTD_CCtxParams_init_advanced","ZSTD_CCtxParams_reset","ZSTD_CCtxParams_setParameter","ZSTD_CCtx_getParameter","ZSTD_CCtx_loadDictionary","ZSTD_CCtx_loadDictionary_advanced","ZSTD_CCtx_loadDictionary_byReference","ZSTD_CCtx_refCDict","ZSTD_CCtx_refPrefix","ZSTD_CCtx_refPrefix_advanced","ZSTD_CCtx_refThreadPool","ZSTD_CCtx_reset","ZSTD_CCtx_setCParams","ZSTD_CCtx_setFParams","ZSTD_CCtx_setParameter","ZSTD_CCtx_setParametersUsingCCtxParams","ZSTD_CCtx_setParams","ZSTD_CCtx_setPledgedSrcSize","ZSTD_CStreamInSize","ZSTD_CStreamOutSize","ZSTD_DCtx_getParameter","ZSTD_DCtx_loadDictionary","ZSTD_DCtx_loadDictionary_advanced","ZSTD_DCtx_loadDictionary_byReference","ZSTD_DCtx_refDDict","ZSTD_DCtx_refPrefix","ZSTD_DCtx_refPrefix_advanced","ZSTD_DCtx_reset","ZSTD_DCtx_setFormat","ZSTD_DCtx_setMaxWindowSize","ZSTD_DCtx_setParameter","ZSTD_DStreamInSize","ZSTD_DStreamOutSize","ZSTD_adjustCParams","ZSTD_cParam_getBounds","ZSTD_checkCParams","ZSTD_compress","ZSTD_compress2","ZSTD_compressBegin","ZSTD_compressBegin_advanced","ZSTD_compressBegin_usingCDict","ZSTD_compressBegin_usingCDict_advanced","ZSTD_compressBegin_usingDict","ZSTD_compressBlock","ZSTD_compressBound","ZSTD_compressCCtx","ZSTD_compressContinue","ZSTD_compressEnd","ZSTD_compressSequences","ZSTD_compressStream","ZSTD_compressStream2","ZSTD_compressStream2_simpleArgs","ZSTD_compress_advanced","ZSTD_compress_usingCDict","ZSTD_compress_usingCDict_advanced","ZSTD_compress_usingDict","ZSTD_copyCCtx","ZSTD_copyDCtx","ZSTD_createCCtx","ZSTD_createCCtxParams","ZSTD_createCCtx_advanced","ZSTD_createCDict","ZSTD_createCDict_advanced","ZSTD_createCDict_advanced2","ZSTD_createCDict_byReference","ZSTD_createCStream","ZSTD_createCStream_advanced","ZSTD_createDCtx","ZSTD_createDCtx_advanced","ZSTD_createDDict","ZSTD_createDDict_advanced","ZSTD_createDDict_byReference","ZSTD_createDStream","ZSTD_createDStream_advanced","ZSTD_createThreadPool","ZSTD_dParam_getBounds","ZSTD_decodingBufferSize_min","ZSTD_decompress","ZSTD_decompressBegin","ZSTD_decompressBegin_usingDDict","ZSTD_decompressBegin_usingDict","ZSTD_decompressBlock","ZSTD_decompressBound","ZSTD_decompressContinue","ZSTD_decompressDCtx","ZSTD_decompressStream","ZSTD_decompressStream_simpleArgs","ZSTD_decompress_usingDDict","ZSTD_decompress_usingDict","ZSTD_decompressionMargin","ZSTD_defaultCLevel","ZSTD_endStream","ZSTD_estimateCCtxSize","ZSTD_estimateCCtxSize_usingCCtxParams","ZSTD_estimateCCtxSize_usingCParams","ZSTD_estimateCDictSize","ZSTD_estimateCDictSize_advanced","ZSTD_estimateCStreamSize","ZSTD_estimateCStreamSize_usingCCtxParams","ZSTD_estimateCStreamSize_usingCParams","ZSTD_estimateDCtxSize","ZSTD_estimateDDictSize","ZSTD_estimateDStreamSize","ZSTD_estimateDStreamSize_fromFrame","ZSTD_findDecompressedSize","ZSTD_findFrameCompressedSize","ZSTD_flushStream","ZSTD_frameHeaderSize","ZSTD_freeCCtx","ZSTD_freeCCtxParams","ZSTD_freeCDict","ZSTD_freeCStream","ZSTD_freeDCtx","ZSTD_freeDDict","ZSTD_freeDStream","ZSTD_freeThreadPool","ZSTD_generateSequences","ZSTD_getBlockSize","ZSTD_getCParams","ZSTD_getDecompressedSize","ZSTD_getDictID_fromCDict","ZSTD_getDictID_fromDDict","ZSTD_getDictID_fromDict","ZSTD_getDictID_fromFrame","ZSTD_getErrorCode","ZSTD_getErrorName","ZSTD_getErrorString","ZSTD_getFrameContentSize","ZSTD_getFrameHeader","ZSTD_getFrameHeader_advanced","ZSTD_getFrameProgression","ZSTD_getParams","ZSTD_initCStream","ZSTD_initCStream_advanced","ZSTD_initCStream_srcSize","ZSTD_initCStream_usingCDict","ZSTD_initCStream_usingCDict_advanced","ZSTD_initCStream_usingDict","ZSTD_initDStream","ZSTD_initDStream_usingDDict","ZSTD_initDStream_usingDict","ZSTD_initStaticCCtx","ZSTD_initStaticCDict","ZSTD_initStaticCStream","ZSTD_initStaticDCtx","ZSTD_initStaticDDict","ZSTD_initStaticDStream","ZSTD_insertBlock","ZSTD_isError","ZSTD_isFrame","ZSTD_isSkippableFrame","ZSTD_maxCLevel","ZSTD_mergeBlockDelimiters","ZSTD_minCLevel","ZSTD_nextInputType","ZSTD_nextSrcSizeToDecompress","ZSTD_readSkippableFrame","ZSTD_registerSequenceProducer","ZSTD_resetCStream","ZSTD_resetDStream","ZSTD_sequenceBound","ZSTD_sizeof_CCtx","ZSTD_sizeof_CDict","ZSTD_sizeof_CStream","ZSTD_sizeof_DCtx","ZSTD_sizeof_DDict","ZSTD_sizeof_DStream","ZSTD_toFlushNow","ZSTD_versionNumber","ZSTD_versionString","ZSTD_writeSkippableFrame"],"static":["ZSTD_defaultCMem"],"struct":["POOL_ctx_s","ZDICT_cover_params_t","ZDICT_fastCover_params_t","ZDICT_legacy_params_t","ZDICT_params_t","ZSTD_CCtx_params_s","ZSTD_CCtx_s","ZSTD_CDict_s","ZSTD_DCtx_s","ZSTD_DDict_s","ZSTD_Sequence","ZSTD_bounds","ZSTD_compressionParameters","ZSTD_customMem","ZSTD_frameHeader","ZSTD_frameParameters","ZSTD_frameProgression","ZSTD_inBuffer_s","ZSTD_outBuffer_s","ZSTD_parameters"],"type":["ZSTD_CCtx","ZSTD_CCtx_params","ZSTD_CDict","ZSTD_CStream","ZSTD_DCtx","ZSTD_DDict","ZSTD_DStream","ZSTD_allocFunction","ZSTD_freeFunction","ZSTD_inBuffer","ZSTD_outBuffer","ZSTD_sequenceProducer_F","ZSTD_threadPool"]};