const example = require('../Models/example')

const postExample = async(req,res)=>{
const data = await example.create(req.body);
if(data) res.status(200).json({ success : true, message:'data posted',data})
if(!data)res.status(404).json({ success:false, message:'something went wrong'})
}

const getExample = async(req,res)=>{
    const find = await example.find();
    if(find) res.status(200).json({ success : true, message:'get data success',data:find})
    if(!find) res.status(200).json({ success : false, message:'something went wrong'})
}
const getExampleById = async(req,res)=>{
    const find = await example.findById(req.params.id);
    if(find) res.status(200).json({ success : true, message:'get dataById success',data:find})
    if(!find) res.status(200).json({ success : false, message:'something went wrong'})
}

const updateExample = async(req,res)=>{
    const find = await example.findById(req.params.id);
    if(!find) res.status(200).json({ success : false, message:'data not found'})
    const update = await example.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true})
    if(update) res.status(200).json({ success : true, message:'data updated successfully',data:update})
    if(!update) res.status(200).json({ success : false, message:'unable to upadate Data'})
}
const deleteExample = async(req,res)=>{
    const find = await example.findById(req.params.id);
    if(!find) res.status(200).json({ success : false, message:'data not found'})
    const del = await example.findByIdAndRemove(req.params.id)
    if(del) res.status(200).json({ success: true, message:'data deleted successfully',data:del})
    if(!del) res.status(400).json({ success: true, message:'unable to delete data '})
}

module.exports ={
    postExample,
    getExample,
    getExampleById,
    updateExample,
    deleteExample
}