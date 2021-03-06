customProperties:"formComponent:false",
dataSource:"db:/winfly/doc_riparazioni_dett",
items:[
{
json:{
location:{
x:1,
y:5
},
onActionMethodID:"4FAA3DEC-8ACE-471D-88D9-B14E3F15C7E7",
size:{
height:35,
width:93
},
styleClass:"btn btn-primary",
text:"Aggiungi"
},
location:"1,5",
name:"add",
size:"93,35",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"17B69D5C-0F56-4447-8A3A-8DEFEA7EB964"
},
{
anchors:11,
dataProviderID:"num_pezzi",
location:"511,68",
name:"ore1",
size:"78,32",
typeid:4,
uuid:"30519A78-C5DE-403E-8E6C-BACC3CE507A7"
},
{
location:"912,69",
name:"del",
onActionMethodID:"D5846CA8-77BE-4FD0-98A2-EBDEB16B2E16",
size:"80,32",
styleClass:"fa fa-trash-o del-buttom-table",
toolTipText:"Elimina riga",
typeid:7,
uuid:"392D9CB9-59E9-43CA-9ED9-12D7DB7CA845"
},
{
anchors:11,
dataProviderID:"doc_riparazioni_dett_to_articoli.cod_art",
location:"5,70",
name:"codice",
onDataChangeMethodID:"-1",
onFocusGainedMethodID:"F969AB4A-16D3-4F25-9B89-57F2E4ACFE63",
size:"140,32",
typeid:4,
uuid:"411994B3-F40B-4C3A-B2A7-92CCBF4E9ED6"
},
{
height:44,
partType:1,
typeid:19,
uuid:"46CDB562-5BD0-41C5-A822-136C551E3B49"
},
{
anchors:11,
labelFor:"codice",
location:"5,51",
size:"140,20",
text:"Codice",
transparent:true,
typeid:7,
uuid:"4EBC50F7-F6C0-40C6-B12F-FB7B624BB3AE"
},
{
anchors:11,
dataProviderID:"tab_unit_mis_id",
location:"669,68",
name:"um",
size:"78,32",
typeid:4,
uuid:"67E036E9-603A-4324-923D-6B7D1C02237F",
valuelistID:"5961C28F-15BF-41BF-B7AA-94ECDA9FFCEE"
},
{
anchors:11,
labelFor:"prezzo",
location:"747,47",
size:"78,20",
text:"Prezzo",
transparent:true,
typeid:7,
uuid:"6C547133-101D-4891-80D1-6C973FA7A6C0"
},
{
height:196,
partType:5,
typeid:19,
uuid:"891B3330-7EE8-4341-B118-1B7F1AD4A374"
},
{
anchors:11,
labelFor:"qta",
location:"590,49",
size:"78,20",
text:"Qtà",
transparent:true,
typeid:7,
uuid:"9C32D87F-214A-46E9-B4B1-36F500DD5133"
},
{
anchors:11,
dataProviderID:"descrizione",
location:"144,69",
name:"desc",
size:"374,32",
typeid:4,
uuid:"9F516113-C8A2-4E17-8699-3E8E75FA8917"
},
{
anchors:11,
dataProviderID:"prezzo",
location:"748,68",
name:"prezzo",
size:"77,32",
typeid:4,
uuid:"A7A44AAC-93ED-4F41-A17F-FB9EA1E095F3"
},
{
anchors:11,
labelFor:"um",
location:"670,48",
size:"77,20",
text:"UM",
transparent:true,
typeid:7,
uuid:"B553D4AB-65C6-40BB-8883-056DDBA37598"
},
{
anchors:11,
labelFor:"desc",
location:"144,51",
size:"372,20",
text:"Descrizione",
transparent:true,
typeid:7,
uuid:"C054641B-0424-4EC5-B952-961467B2A7CE"
},
{
anchors:11,
labelFor:"ore1",
location:"512,49",
size:"77,20",
text:"Ore",
transparent:true,
typeid:7,
uuid:"DE0FFEBB-A49D-40B8-BE10-BA8884CF3213"
},
{
anchors:11,
labelFor:"del",
location:"910,48",
size:"100,20",
text:"Action",
transparent:true,
typeid:7,
uuid:"EC067ABF-194F-4B74-A5E0-E0B78471E17A"
},
{
anchors:11,
dataProviderID:"qta",
location:"590,67",
name:"qta",
size:"78,32",
typeid:4,
uuid:"EF8CDDC0-89DD-41C0-A400-E8C5E2D1AF1A"
}
],
name:"frm_Riparazioni$dettaglioArticoli",
showInMenu:true,
size:"968,196",
styleClass:"form2",
typeid:3,
uuid:"7E3B0039-A931-42F2-A196-F4146D804DD5",
view:3