popUpMenu.prototype.processNew = function(op)
{      
    console.log("处理操作："+op);
    switch(op)
    {
        case 'menu_file_exportFloor':
            this.exportFloor();
            console.log(op);
        break;
        case 'menu_file_exportAll':
            this.exportAll();
            console.log(op);
        break;

        case 'menu_new_Building':
            console.log(op);
        break;

        case 'menu_new_Floor':
            console.log(op);
        break;

        case 'menu_new_Block':
            console.log(op);
        break;
        case 'menu_new_Brand':
            console.log(op);
        break;
        case 'menu_new_MPoint':
            console.log(op);
        break;
        
        case 'menu_manage_changeFloor':
            this.changeFloor(1,2);//change to building 1, floor 2 (count from zero)
            console.log(op);
        break;
        
        case 'menu_manage_Group':
            console.log(op);
        break;

        case 'menu_manage_Block':
            console.log(op);
        break;                    
        case 'menu_manage_Brand':
            console.log(op);
        break;
        case 'menu_manage_MPoint':
            console.log(op);
        break;
    }
}
popUpMenu.prototype.exportFloor = function()
{    
    this.viewer.exportFloor('xml');
}
popUpMenu.prototype.exportAll = function()
{    
    this.viewer.toSaveAll('xml');
}

popUpMenu.prototype.changeFloor = function(bid,fid)
{    
    this.viewer.changeBdFloo(bid,fid);
}

popUpMenu.prototype.newBuilding = function()
{    
    this.viewer.newBuilding();
}
popUpMenu.prototype.newFloor = function()
{    
    this.viewer.newFloor();
}
popUpMenu.prototype.newBlock = function()
{    
    this.viewer.newBlock();
}
popUpMenu.prototype.newBrand = function()
{    
    this.viewer.newBrand();
}
popUpMenu.prototype.newMPoint = function()
{    
    this.viewer.newMPoint();
}