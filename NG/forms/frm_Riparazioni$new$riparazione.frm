customProperties:"formComponent:false",
dataSource:"db:/winfly/doc_riparazioni",
encapsulation:60,
items:[
{
json:{
location:{
x:10,
y:263
},
size:{
height:27,
width:95
},
styleClass:"h4",
text:"Intervento"
},
location:"10,263",
name:"intervento",
size:"95,27",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"057FB935-6151-4667-ABCF-928502111439"
},
{
anchors:3,
json:{
anchors:3,
dataProviderID:"data_documento",
format:"dd-MM-yyyy|dd-MM-yyyy",
location:{
x:515,
y:102
},
size:{
height:20,
width:136
},
styleClass:"h3 text-right"
},
location:"515,102",
name:"label_1015",
size:"136,20",
typeName:"servoydefault-label",
typeid:47,
uuid:"264C4BC5-2AA6-4F7D-BC73-569F4B3C9A56"
},
{
json:{
location:{
x:11,
y:538
},
size:{
height:30,
width:146
},
styleClass:"h4",
text:"Orario di inzio"
},
location:"11,538",
name:"orap",
size:"146,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"37CDD5B3-2395-45C4-8571-FA52CEADEB1B"
},
{
anchors:3,
json:{
anchors:3,
dataProviderID:"scopes.login.user_uuid",
location:{
x:561,
y:136
},
size:{
height:20,
width:90
},
styleClass:"h4 text-right"
},
location:"561,136",
name:"label_1015c",
size:"90,20",
typeName:"servoydefault-label",
typeid:47,
uuid:"41C977BB-14E4-4FF2-9E80-54D84239E140"
},
{
json:{
location:{
x:11,
y:420
},
size:{
height:27,
width:94
},
styleClass:"h4",
text:"Note"
},
location:"11,420",
name:"note",
size:"94,27",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"5A5DF938-D505-422C-8BBC-738528DF58BB"
},
{
anchors:12,
json:{
anchors:12,
location:{
x:127,
y:803
},
onActionMethodID:"D172D3EF-F588-4D8F-ADFA-86E0F722FC96",
size:{
height:42,
width:100
},
text:"Cancel"
},
location:"127,803",
name:"cancel",
size:"100,42",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"5D9B8C6D-53A2-4658-BDBC-DF88752A0D7C"
},
{
json:{
dataProviderID:"peso_netto",
location:{
x:344,
y:538
},
onActionMethodID:null,
onDataChangeMethodID:"EB322EC9-084E-4372-B5D9-A3D04A5D42C5",
size:{
height:30,
width:67
},
styleClass:"form-control h4"
},
location:"344,538",
name:"oraf1",
size:"67,30",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"5F78A230-6C45-49D7-9ECC-9BCEA8A96637"
},
{
anchors:3,
json:{
anchors:3,
location:{
x:578,
y:74
},
size:{
height:22,
width:73
},
styleClass:"h3 text-right",
text:"# %%numero_progressivo%%"
},
location:"578,74",
name:"label_1",
size:"73,22",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"71AD2E98-7164-46CB-8BA0-147838C020A8"
},
{
anchors:11,
borderType:"SpecialMatteBorder,1.0,0.0,0.0,0.0,#000000,#000000,#000000,#000000,0.0,",
horizontalAlignment:4,
location:"5,66",
name:"line",
size:"646,1",
text:"",
transparent:true,
typeid:7,
uuid:"721CF9D3-FD97-400A-8D83-9BDB7B5A5CC8"
},
{
anchors:11,
json:{
anchors:11,
containedForm:"7E3B0039-A931-42F2-A196-F4146D804DD5",
location:{
x:13,
y:605
},
relationName:"doc_riparazioni_to_doc_riparazioni_dett",
size:{
height:183,
width:641
}
},
location:"13,605",
name:"tablesspanel_2",
size:"641,183",
typeName:"bootstrapcomponents-tablesspanel",
typeid:47,
uuid:"811FA008-4EF4-48CA-A5EB-46A121AC6E07"
},
{
anchors:11,
json:{
anchors:11,
dataProviderID:"note_iniziali",
location:{
x:110,
y:263
},
size:{
height:150,
width:541
},
styleClass:"form-control h4"
},
location:"110,263",
name:"intervento1",
size:"541,150",
typeName:"bootstrapcomponents-textarea",
typeid:47,
uuid:"88C586F7-85AA-4857-BC32-4A110881E919"
},
{
dataProviderID:"cliente_rag_soc",
location:"13,112",
name:"cliente1",
onActionMethodID:"-1",
onFocusGainedMethodID:"0C4BDAD2-44E0-40F7-A148-5E3D0444C7B0",
size:"374,27",
typeid:4,
uuid:"8FA53ED4-07D2-4742-BD9F-2D60B2468270"
},
{
anchors:3,
json:{
anchors:3,
location:{
x:600,
y:16
},
media:"2D03BDA6-0C08-4BA6-B8F4-535F0EEEFDF1",
size:{
height:54,
width:54
}
},
location:"600,16",
name:"crm",
size:"54,54",
typeName:"servoyextra-imagelabel",
typeid:47,
uuid:"99F8BA9F-A795-493B-BF07-FCC936427317"
},
{
json:{
location:{
x:222,
y:538
},
size:{
height:30,
width:145
},
styleClass:"h4",
text:"Orario di fine"
},
location:"222,538",
name:"oraf",
size:"145,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"A90E6061-B317-47EA-98E8-D77076BD87F4"
},
{
json:{
location:{
x:10,
y:75
},
size:{
height:21,
width:100
},
styleClass:"h4",
text:"Cliente:"
},
location:"10,75",
name:"cliente",
size:"100,21",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"B588C7CF-8DCA-4532-8DAC-FAA498A2D0BB"
},
{
json:{
dataProviderID:"peso_lordo",
location:{
x:138,
y:538
},
onActionMethodID:null,
onDataChangeMethodID:"EB322EC9-084E-4372-B5D9-A3D04A5D42C5",
size:{
height:30,
width:67
},
styleClass:"form-control h4"
},
location:"138,538",
name:"orap1",
size:"67,30",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"BE89BD12-52C7-4150-ACAA-364CB6EC549C"
},
{
json:{
dataProviderID:"totale_tempo_fatt",
location:{
x:583,
y:538
},
size:{
height:30,
width:67
},
styleClass:"form-control h4"
},
location:"583,538",
name:"oraf1c",
size:"67,30",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"C37A02E6-561C-44A0-BB43-039A85AC6E93"
},
{
anchors:12,
json:{
anchors:12,
location:{
x:5,
y:803
},
onActionMethodID:"2309C67D-E634-4FC7-B49B-D42F66807175",
size:{
height:42,
width:117
},
styleClass:"btn btn-success fa fa-check",
text:"Save"
},
location:"5,803",
name:"save",
size:"117,42",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"C45449A0-9759-4D82-A1C1-C1453548329C"
},
{
json:{
location:{
x:449,
y:538
},
size:{
height:30,
width:146
},
styleClass:"h4",
text:"Totale fatturato:"
},
location:"449,538",
name:"label_2c",
size:"146,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"C90179E0-6FE2-4842-9358-26DB8D59A3F2"
},
{
json:{
dataProviderID:"spese_trasporto",
location:{
x:138,
y:498
},
onActionMethodID:null,
onDataChangeMethodID:"EB322EC9-084E-4372-B5D9-A3D04A5D42C5",
size:{
height:30,
width:67
},
styleClass:"form-control h4"
},
location:"138,498",
name:"tempov1",
size:"67,30",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"D003973E-79D4-4DB0-857C-1ADF049E0A80"
},
{
json:{
location:{
x:11,
y:498
},
size:{
height:30,
width:146
},
styleClass:"h4",
text:"Tempo viaggio"
},
location:"11,498",
name:"tempov",
size:"146,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"D00E520A-FA76-4736-B27C-37B8C3AEC32B"
},
{
anchors:11,
json:{
anchors:11,
dataProviderID:"note_documento",
location:{
x:110,
y:420
},
size:{
height:50,
width:541
},
styleClass:"form-control h4"
},
location:"110,420",
name:"note1",
size:"541,50",
typeName:"bootstrapcomponents-textarea",
typeid:47,
uuid:"D4DEE199-CF5C-409A-8276-C653BBB54A7F"
},
{
json:{
location:{
x:5,
y:5
},
size:{
height:51,
width:517
},
styleClass:"h2",
text:"Modulo di Riparazione Esterna"
},
location:"5,5",
name:"modulo",
size:"517,51",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E39B2CDB-C30D-4E88-9804-377815FC61E7"
},
{
anchors:11,
json:{
anchors:11,
dataProviderID:"note_finali",
location:{
x:110,
y:221
},
size:{
height:35,
width:541
},
styleClass:"form-control h4"
},
location:"110,221",
name:"problema1",
size:"541,35",
typeName:"bootstrapcomponents-textarea",
typeid:47,
uuid:"E4706394-D302-45E9-92B9-3C86FF9A437F"
},
{
json:{
location:{
x:11,
y:221
},
size:{
height:27,
width:94
},
styleClass:"h4",
text:"Problema"
},
location:"11,221",
name:"problema",
size:"94,27",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E65B16BD-C349-4100-B013-316B8E9CC87A"
},
{
height:850,
partType:5,
typeid:19,
uuid:"FD8772A2-8838-430A-80D9-D0D4760F8DDC"
}
],
name:"frm_Riparazioni$new$riparazione",
onShowMethodID:"-1",
showInMenu:true,
size:"660,1000",
styleClass:"form2",
typeid:3,
uuid:"1798A45F-5A48-4EAC-B804-DBB4BAC1BED8"