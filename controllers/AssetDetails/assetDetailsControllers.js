const { StatusCodes } = require('http-status-codes')
const CustomError = require('../../errors')
const AssetDetails = require('../../model/asset-hosting/asset-details')
const User = require('../../model/user-credentials/userAccounts')
const utils = require('../../utils')
require('dotenv').config()


const getAllAssets = async (req, res) => {
    req.body.user = req.user.userId;
    const asset = await AssetDetails.find({})
    //to make sure the assets of the same one company appear
    res.status(StatusCodes.OK).json({ asset, count: asset.length })

}
const createAsset = async (req, res) => {
    req.body.user = req.user.userId;
    const { body: { AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type, user }, user: { userId } } = req
    if (!AssetName || !TagNumber || !AssetSn || !EmployeeNumber || !Address) {
        throw new CustomError.UnauthenticatedError('please provide appropriate credentials to streamline refrencing in future')
    }
    // another way for doing this
    // user = userId
    // console.log(req.body)
    // const asset = await AssetDetails.create(req.body)
    const asset = await AssetDetails.create({ AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type, user: userId })
    res.status(StatusCodes.CREATED).json({ asset })
}
const getSingleAssets = async (req, res) => {
    req.body.user = req.user.userId;
    const { id: assetId } = req.params
    const asset = await AssetDetails.findOne({ _id: assetId })
    if (!asset) {
        throw new CustomError.BadRequestError(`Could not find asset with ${assetId}`)
    }
    res.status(StatusCodes.OK).json({ asset })
    // res.send('get single asset')
}
const updateAsset = async (req, res) => {
    req.body.user = req.user.userId;
    const { user: { userId }, params: { id: assetId }, body: { AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type } } = req
    if (AssetName === '' || TagNumber === '' || AssetSn === '' || EmployeeNumber === '' || Address === '') {
        throw new CustomError.BadRequestError('Cannot leave fields as blank')
    }
    const asset = await AssetDetails.findByIdAndUpdate({ _id: assetId, user: userId }, { AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type }, { runValidators: true, new: true })
    res.status(StatusCodes.OK).json({ asset })
}
const deleteAssets = async (req, res) => {
    req.body.user = req.user.userId;
    const { user: { userId }, params: { id: assetId } } = req
    const asset = await AssetDetails.findOneAndRemove({ _id: assetId, user: userId })
    res.status(StatusCodes.OK).json({ asset })
}
// const editAsset = async (req, res) => {
//     res.send('edit asset')
// }

module.exports = { getAllAssets, getSingleAssets, createAsset, updateAsset, deleteAssets }