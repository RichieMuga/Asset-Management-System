const express = require('express')
const router = express.Router()
const { getAllAssets, getSingleAssets, createAsset, deleteAssets, updateAsset, editAsset } = require('../../controllers/AssetDetails/assetDetailsControllers')
const { authentication } = require('../../middleware/authentication')

router.route('/').get(authentication, getAllAssets)
    .post(authentication, createAsset)
router.route('/:id').get(authentication, getSingleAssets)
    .patch(authentication, updateAsset)
    .delete(authentication, deleteAssets)


module.exports = router