const { StatusCodes } = require('http-status-codes')
const CustomError= require('../../errors')
const AssetDetails = require('../../model/asset-hosting/asset-details')
require('dotenv').config()


const getAllAssets = async (req, res) => {
 res.send('all assets')
}
const createAsset=async (req,res)=>{
    res.send('create asset')
}
const getSingleAssets = async (req, res) => {
 res.send('single assets')
}
const updateAsset=async (req,res)=>{
    res.send('update asset')
}
const deleteAssets = async (req, res) => {
 res.send('delete asset')
}
const editAsset = async(req,res)=>{
    res.send('edit asset')
}

module.exports={getAllAssets,getSingleAssets,createAsset,updateAsset,deleteAssets,editAsset}