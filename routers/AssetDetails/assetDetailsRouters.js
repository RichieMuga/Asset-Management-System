const express = require('express')
const router = express.Router()
const { getAllAssets,getSingleAssets,createAsset,deleteAssets,updateAsset,editAsset } = require('../../controllers/AssetDetails/assetDetailsControllers')

router.route('/').get(getAllAssets).post(createAsset)
router.route('/:id').get(getSingleAssets).patch(updateAsset).delete(deleteAssets)


module.exports = router