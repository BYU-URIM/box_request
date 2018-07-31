import { IBox, IFolder, IUser } from "../models/StoreModels"
export const mockUser: IUser = {
    name: "Greg Anderson",
    Id: "12345",
    email: "email@gmail.com",
    username: "greggy",
    departments: [
        { id: 5555, name: "Department of Aerophysics" },
        { id: 5556, name: "Department of Science" },
    ],
}

export const mockBoxes: Array<IBox> = [
    {
        BoxIdBarCode: 323617,
        Location: "L7957050050",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 485072,
        Location: "5556",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 81552,
        Location: "legal",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 739922,
        Location: "L3971521886",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 970173,
        Location: "L6164995787",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 62536,
        Location: "L2338653742",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 520868,
        Location: "L9186517090",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 978267,
        Location: "L4551179809",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 740127,
        Location: "L8320275040",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 909880,
        Location: "L0484444220",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 946158,
        Location: "L1840134305",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 749515,
        Location: "L2352083885",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 879407,
        Location: "legal",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 821065,
        Location: "L7114956371",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 8644,
        Location: "L6920993074",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 482870,
        Location: "L5425950578",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 882980,
        Location: "L4695700298",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 487313,
        Location: "L9411646433",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 677058,
        Location: "L0220868042",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 739441,
        Location: "L1329487621",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 36641,
        Location: "L8421437127",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 692492,
        Location: "L8911901687",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 108299,
        Location: "L6792267775",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 299680,
        Location: "L5857183014",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 428508,
        Location: "L7879253556",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 248182,
        Location: "L5326679639",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 639433,
        Location: "L6818600468",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 134892,
        Location: "L4292596905",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 233369,
        Location: "L0664729525",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 322828,
        Location: "L7745464935",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 188473,
        Location: "L3346974642",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 778756,
        Location: "L9180049737",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 414234,
        Location: "L8033470488",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 112578,
        Location: "L3094985211",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 243813,
        Location: "L7668245898",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 668549,
        Location: "L9695278353",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 590200,
        Location: "L3447552972",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 559530,
        Location: "L7068285740",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 410344,
        Location: "L2346291773",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 993620,
        Location: "L7853428685",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 973179,
        Location: "L2115963105",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 8508,
        Location: "L1422972364",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 399414,
        Location: "L9546484113",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 44031,
        Location: "L6579311177",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 170988,
        Location: "L0897439376",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 636538,
        Location: "L2323589156",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 466286,
        Location: "L6006381842",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 666693,
        Location: "L4467214925",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 26898,
        Location: "L7259627492",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 838811,
        Location: "L3034865465",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 268623,
        Location: "L9187117630",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 647543,
        Location: "L8752060365",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 431949,
        Location: "L7720588827",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 345299,
        Location: "L7347885698",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 376131,
        Location: "L4030706959",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 112513,
        Location: "L0411746898",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 268822,
        Location: "L7170579545",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 414147,
        Location: "L7227122727",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 151645,
        Location: "L1079588965",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 450502,
        Location: "L9338792560",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 604250,
        Location: "L1286052564",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 517630,
        Location: "L6339333656",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 689905,
        Location: "L9354077536",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 37033,
        Location: "L1737986698",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 214564,
        Location: "L3863202090",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 174919,
        Location: "L8538525824",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 276617,
        Location: "L9123045906",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 316754,
        Location: "L6688907887",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 479254,
        Location: "L8110805787",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 137813,
        Location: "L5319819978",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 708658,
        Location: "L4657589342",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 746531,
        Location: "L6571682834",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 798485,
        Location: "L0802286097",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 939125,
        Location: "L5335969733",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 780435,
        Location: "L8216711204",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 739374,
        Location: "L2296853544",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 414098,
        Location: "L1500727296",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 688247,
        Location: "L8609941019",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 765823,
        Location: "L2098081502",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 938294,
        Location: "L8494695274",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 962761,
        Location: "L2827959127",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 793388,
        Location: "L1046151290",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 342550,
        Location: "L7653928269",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 966697,
        Location: "L4826663099",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 36297,
        Location: "L9090303049",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 984768,
        Location: "L6448973850",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 501513,
        Location: "L6817740088",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 731057,
        Location: "L1290238308",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 413596,
        Location: "L9285153496",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 704459,
        Location: "L0048362115",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 800767,
        Location: "L7681839208",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 51289,
        Location: "L0850481023",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 322330,
        Location: "L6723291123",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 734133,
        Location: "L4371523056",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 509034,
        Location: "L9318952570",
        DepId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 984854,
        Location: "L6051463046",
        DepId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 359962,
        Location: "L9102217120",
        DepId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 584452,
        Location: "L8165066552",
        DepId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 931672,
        Location: "L4222131296",
        DepId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxIdBarCode: 622621,
        Location: "L4372425023",
        DepId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
]

export const mockFolders: Array<IFolder> = [
    {
        FolderIdBarCode: 537020,
        FolderName: "Traver",
        BoxIdBarCode: 323617,
        Folder_Description: "Secondary spontaneous pneumothorax",
        Location: "323617",
    },
    {
        FolderIdBarCode: 968305,
        FolderName: "Melisent",
        BoxIdBarCode: 485072,
        Folder_Description: "Unspecified subluxation and dislocation of toe",
        Location: "485072",
    },
    {
        FolderIdBarCode: 604204,
        FolderName: "Sibbie",
        BoxIdBarCode: 81552,
        Folder_Description:
            "Other specified injury of axillary artery, unspecified side, sequela",
        Location: "81552",
    },
    {
        FolderIdBarCode: 947662,
        FolderName: "Killie",
        BoxIdBarCode: 739922,
        Folder_Description:
            "Person injured in collision between car and two- or three-wheeled motor vehicle, nontraffic, initial encounter",
        Location: "739922",
    },
    {
        FolderIdBarCode: 767588,
        FolderName: "Darlleen",
        BoxIdBarCode: 970173,
        Folder_Description: "Mucopolysaccharidosis, unspecified",
        Location: "970173",
    },
    {
        FolderIdBarCode: 154797,
        FolderName: "Devan",
        BoxIdBarCode: 62536,
        Folder_Description: "Corrosion of second degree of upper arm",
        Location: "62536",
    },
    {
        FolderIdBarCode: 595930,
        FolderName: "Giordano",
        BoxIdBarCode: 520868,
        Folder_Description: "Astigmatism",
        Location: "legal",
    },
    {
        FolderIdBarCode: 425096,
        FolderName: "Cathrin",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "978267",
    },
    {
        FolderIdBarCode: 425097,
        FolderName: "Cat",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "5556",
    },
    {
        FolderIdBarCode: 658978,
        FolderName: "Frank",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "978267",
    },
    {
        FolderIdBarCode: 321789,
        FolderName: "Project 007",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "978267",
    },
    {
        FolderIdBarCode: 996584,
        FolderName: "Abrahm",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "978267",
    },
    {
        FolderIdBarCode: 454545,
        FolderName: "Chew-Chew",
        BoxIdBarCode: 978267,
        Folder_Description:
            "Other specified diabetes mellitus with hypoglycemia",
        Location: "978267",
    },

    {
        FolderIdBarCode: 129584,
        FolderName: "Pete",
        BoxIdBarCode: 740127,
        Folder_Description:
            "Infection and inflammatory reaction due to internal fixation device of right ulna",
        Location: "740127",
    },
    {
        FolderIdBarCode: 156133,
        FolderName: "Agretha",
        BoxIdBarCode: 909880,
        Folder_Description:
            "Unspecified fracture of lower end of left humerus, subsequent encounter for fracture with nonunion",
        Location: "909880",
    },
    {
        FolderIdBarCode: 189660,
        FolderName: "Dukey",
        BoxIdBarCode: 946158,
        Folder_Description: "Unspecified superficial injury of left ankle",
        Location: "946158",
    },
    {
        FolderIdBarCode: 458046,
        FolderName: "Rachael",
        BoxIdBarCode: 749515,
        Folder_Description:
            "Poisoning by selective serotonin and norepinephrine reuptake inhibitors, accidental (unintentional), initial encounter",
        Location: "749515",
    },
    {
        FolderIdBarCode: 886848,
        FolderName: "Missie",
        BoxIdBarCode: 879407,
        Folder_Description:
            "Collapsed vertebra, not elsewhere classified, cervicothoracic region, initial encounter for fracture",
        Location: "879407",
    },
    {
        FolderIdBarCode: 55115,
        FolderName: "Virgie",
        BoxIdBarCode: 821065,
        Folder_Description:
            "Passenger in pick-up truck or van injured in collision with unspecified motor vehicles in traffic accident",
        Location: "821065",
    },
    {
        FolderIdBarCode: 827625,
        FolderName: "Shelton",
        BoxIdBarCode: 8644,
        Folder_Description: "Congenital deformity of feet, unspecified",
        Location: "8644",
    },
    {
        FolderIdBarCode: 383940,
        FolderName: "Matilde",
        BoxIdBarCode: 482870,
        Folder_Description:
            "Unspecified fracture of shaft of right ulna, subsequent encounter for closed fracture with malunion",
        Location: "482870",
    },
    {
        FolderIdBarCode: 940703,
        FolderName: "Ina",
        BoxIdBarCode: 882980,
        Folder_Description: "Gastritis and duodenitis",
        Location: "882980",
    },
    {
        FolderIdBarCode: 469782,
        FolderName: "Dunstan",
        BoxIdBarCode: 487313,
        Folder_Description: "Foreign body in penis",
        Location: "487313",
    },
    {
        FolderIdBarCode: 677575,
        FolderName: "Angie",
        BoxIdBarCode: 677058,
        Folder_Description:
            "Underdosing of mixed bacterial vaccines without a pertussis component, subsequent encounter",
        Location: "677058",
    },
    {
        FolderIdBarCode: 965328,
        FolderName: "Johannes",
        BoxIdBarCode: 739441,
        Folder_Description:
            "Chagas disease (chronic) with nervous system involvement",
        Location: "739441",
    },
    {
        FolderIdBarCode: 697163,
        FolderName: "Essie",
        BoxIdBarCode: 36641,
        Folder_Description:
            "Toxic effect of contact with other venomous amphibian, intentional self-harm, initial encounter",
        Location: "36641",
    },
    {
        FolderIdBarCode: 338677,
        FolderName: "Dawn",
        BoxIdBarCode: 692492,
        Folder_Description:
            "Other specified disorders of tympanic membrane, bilateral",
        Location: "692492",
    },
    {
        FolderIdBarCode: 694547,
        FolderName: "Avery",
        BoxIdBarCode: 108299,
        Folder_Description:
            "Displaced fracture (avulsion) of medial epicondyle of right humerus, initial encounter for closed fracture",
        Location: "108299",
    },
    {
        FolderIdBarCode: 369922,
        FolderName: "Kathye",
        BoxIdBarCode: 299680,
        Folder_Description:
            "Adverse effect of unspecified antipsychotics and neuroleptics, initial encounter",
        Location: "299680",
    },
    {
        FolderIdBarCode: 456554,
        FolderName: "Thedric",
        BoxIdBarCode: 428508,
        Folder_Description:
            "Person on outside of pick-up truck or van injured in collision with other nonmotor vehicle in nontraffic accident, subsequent encounter",
        Location: "428508",
    },
    {
        FolderIdBarCode: 762333,
        FolderName: "Reese",
        BoxIdBarCode: 248182,
        Folder_Description:
            "Leakage of unspecified cardiac and vascular devices and implants, subsequent encounter",
        Location: "248182",
    },
    {
        FolderIdBarCode: 906757,
        FolderName: "Hastings",
        BoxIdBarCode: 639433,
        Folder_Description:
            "Injury of cutaneous sensory nerve at shoulder and upper arm level, left arm, sequela",
        Location: "639433",
    },
    {
        FolderIdBarCode: 120383,
        FolderName: "Cyndi",
        BoxIdBarCode: 134892,
        Folder_Description:
            "Contusion and laceration of cerebrum, unspecified, with loss of consciousness of any duration with death due to other cause prior to regaining consciousness",
        Location: "134892",
    },
    {
        FolderIdBarCode: 358223,
        FolderName: "Agretha",
        BoxIdBarCode: 233369,
        Folder_Description:
            "Nondisplaced comminuted fracture of shaft of right fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
        Location: "233369",
    },
    {
        FolderIdBarCode: 988675,
        FolderName: "Cassi",
        BoxIdBarCode: 322828,
        Folder_Description: "Adolescent idiopathic scoliosis, site unspecified",
        Location: "322828",
    },
    {
        FolderIdBarCode: 544633,
        FolderName: "Sibylle",
        BoxIdBarCode: 188473,
        Folder_Description:
            "Contusion, laceration, and hemorrhage of brainstem with loss of consciousness of 31 minutes to 59 minutes, sequela",
        Location: "188473",
    },
    {
        FolderIdBarCode: 953265,
        FolderName: "Haskell",
        BoxIdBarCode: 778756,
        Folder_Description: "Arthritis due to other bacteria, vertebrae",
        Location: "778756",
    },
    {
        FolderIdBarCode: 917495,
        FolderName: "Tomkin",
        BoxIdBarCode: 414234,
        Folder_Description:
            "Displaced comminuted fracture of shaft of humerus, right arm, subsequent encounter for fracture with nonunion",
        Location: "414234",
    },
    {
        FolderIdBarCode: 696079,
        FolderName: "Lauren",
        BoxIdBarCode: 112578,
        Folder_Description: "Dry eye syndrome of left lacrimal gland",
        Location: "112578",
    },
    {
        FolderIdBarCode: 18729,
        FolderName: "Carmelita",
        BoxIdBarCode: 243813,
        Folder_Description:
            "Displaced fracture of lateral condyle of unspecified tibia, subsequent encounter for closed fracture with delayed healing",
        Location: "243813",
    },
    {
        FolderIdBarCode: 107339,
        FolderName: "Danna",
        BoxIdBarCode: 668549,
        Folder_Description: "Paralysis of vocal cords and larynx, unilateral",
        Location: "668549",
    },
    {
        FolderIdBarCode: 902370,
        FolderName: "Stanton",
        BoxIdBarCode: 590200,
        Folder_Description:
            "External constriction of part of breast, left breast",
        Location: "590200",
    },
    {
        FolderIdBarCode: 962285,
        FolderName: "Umberto",
        BoxIdBarCode: 559530,
        Folder_Description:
            "Poisoning by antithrombotic drugs, accidental (unintentional), sequela",
        Location: "559530",
    },
    {
        FolderIdBarCode: 230233,
        FolderName: "Remy",
        BoxIdBarCode: 410344,
        Folder_Description:
            "Hemorrhage due to other internal prosthetic devices, implants and grafts, initial encounter",
        Location: "410344",
    },
    {
        FolderIdBarCode: 752280,
        FolderName: "Christophe",
        BoxIdBarCode: 993620,
        Folder_Description: "Hyperplasia of appendix",
        Location: "993620",
    },
    {
        FolderIdBarCode: 530439,
        FolderName: "Dennie",
        BoxIdBarCode: 973179,
        Folder_Description:
            "Laceration of intrinsic muscle, fascia and tendon of left little finger at wrist and hand level",
        Location: "973179",
    },
    {
        FolderIdBarCode: 929831,
        FolderName: "Pacorro",
        BoxIdBarCode: 8508,
        Folder_Description: "Toxic effect of fiberglass, undetermined",
        Location: "8508",
    },
    {
        FolderIdBarCode: 868583,
        FolderName: "Camellia",
        BoxIdBarCode: 399414,
        Folder_Description: "Hypersensitivity pneumonitis due to organic dust",
        Location: "399414",
    },
    {
        FolderIdBarCode: 143227,
        FolderName: "Alf",
        BoxIdBarCode: 44031,
        Folder_Description:
            "Laceration of other blood vessels at hip and thigh level, left leg",
        Location: "44031",
    },
    {
        FolderIdBarCode: 473771,
        FolderName: "Brandise",
        BoxIdBarCode: 170988,
        Folder_Description:
            "Puncture wound without foreign body of right ring finger without damage to nail, initial encounter",
        Location: "170988",
    },
    {
        FolderIdBarCode: 137512,
        FolderName: "Hobart",
        BoxIdBarCode: 636538,
        Folder_Description:
            "Severely displaced Zone I fracture of sacrum, subsequent encounter for fracture with routine healing",
        Location: "636538",
    },
    {
        FolderIdBarCode: 497665,
        FolderName: "Winifield",
        BoxIdBarCode: 466286,
        Folder_Description:
            "Newborn affected by maternal conditions that may be unrelated to present pregnancy",
        Location: "466286",
    },
    {
        FolderIdBarCode: 993863,
        FolderName: "Chen",
        BoxIdBarCode: 666693,
        Folder_Description:
            "Displaced fracture of medial phalanx of right middle finger, subsequent encounter for fracture with malunion",
        Location: "666693",
    },
    {
        FolderIdBarCode: 189432,
        FolderName: "Harrison",
        BoxIdBarCode: 26898,
        Folder_Description: "Osteochondritis dissecans",
        Location: "26898",
    },
    {
        FolderIdBarCode: 497347,
        FolderName: "Chiquita",
        BoxIdBarCode: 838811,
        Folder_Description:
            "Person injured in collision between car and heavy transport vehicle, nontraffic",
        Location: "838811",
    },
    {
        FolderIdBarCode: 21683,
        FolderName: "Gardy",
        BoxIdBarCode: 268623,
        Folder_Description: "Primary syphilis of other sites",
        Location: "268623",
    },
    {
        FolderIdBarCode: 524970,
        FolderName: "Philbert",
        BoxIdBarCode: 647543,
        Folder_Description:
            "Unspecified fracture of unspecified forearm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
        Location: "647543",
    },
    {
        FolderIdBarCode: 71829,
        FolderName: "Annalise",
        BoxIdBarCode: 431949,
        Folder_Description:
            "Legal intervention involving other explosives, bystander injured, subsequent encounter",
        Location: "431949",
    },
    {
        FolderIdBarCode: 472817,
        FolderName: "Betteanne",
        BoxIdBarCode: 345299,
        Folder_Description: "Hypertrophy of bone, left radius",
        Location: "345299",
    },
    {
        FolderIdBarCode: 820242,
        FolderName: "Dalt",
        BoxIdBarCode: 376131,
        Folder_Description:
            "Subluxation of unspecified interphalangeal joint of unspecified thumb, initial encounter",
        Location: "376131",
    },
    {
        FolderIdBarCode: 277245,
        FolderName: "Donni",
        BoxIdBarCode: 112513,
        Folder_Description:
            "Nondisplaced osteochondral fracture of left patella, subsequent encounter for open fracture type I or II with malunion",
        Location: "112513",
    },
    {
        FolderIdBarCode: 361718,
        FolderName: "Amelita",
        BoxIdBarCode: 268822,
        Folder_Description: "Postlaminectomy kyphosis",
        Location: "268822",
    },
    {
        FolderIdBarCode: 745389,
        FolderName: "Sherlocke",
        BoxIdBarCode: 414147,
        Folder_Description:
            "Terrorism involving fires, conflagration and hot substances, public safety official injured, initial encounter",
        Location: "414147",
    },
    {
        FolderIdBarCode: 885307,
        FolderName: "Dorella",
        BoxIdBarCode: 151645,
        Folder_Description: "Chronic myelomonocytic leukemia",
        Location: "151645",
    },
    {
        FolderIdBarCode: 598325,
        FolderName: "Miguela",
        BoxIdBarCode: 450502,
        Folder_Description: "Monteggias fracture of right ulna, sequela",
        Location: "450502",
    },
    {
        FolderIdBarCode: 377273,
        FolderName: "Costanza",
        BoxIdBarCode: 604250,
        Folder_Description:
            "Legal intervention involving baton, bystander injured, subsequent encounter",
        Location: "604250",
    },
    {
        FolderIdBarCode: 662947,
        FolderName: "Koren",
        BoxIdBarCode: 517630,
        Folder_Description:
            "Diseases of the digestive system complicating childbirth",
        Location: "517630",
    },
    {
        FolderIdBarCode: 372218,
        FolderName: "Bondie",
        BoxIdBarCode: 689905,
        Folder_Description:
            "Sprain of other ligament of left ankle, subsequent encounter",
        Location: "689905",
    },
    {
        FolderIdBarCode: 908045,
        FolderName: "Lyndy",
        BoxIdBarCode: 37033,
        Folder_Description:
            "Military operation involving nuclear radiation effects of nuclear weapon, military personnel, subsequent encounter",
        Location: "37033",
    },
    {
        FolderIdBarCode: 321729,
        FolderName: "Rocky",
        BoxIdBarCode: 214564,
        Folder_Description:
            "Displaced transverse fracture of shaft of right fibula, subsequent encounter for closed fracture with delayed healing",
        Location: "214564",
    },
    {
        FolderIdBarCode: 194578,
        FolderName: "Carlo",
        BoxIdBarCode: 174919,
        Folder_Description: "Corrosion of mouth and pharynx",
        Location: "174919",
    },
    {
        FolderIdBarCode: 436692,
        FolderName: "Maryann",
        BoxIdBarCode: 276617,
        Folder_Description:
            "Unspecified injury of extensor muscle, fascia and tendon of right thumb at wrist and hand level",
        Location: "276617",
    },
    {
        FolderIdBarCode: 975379,
        FolderName: "Walther",
        BoxIdBarCode: 316754,
        Folder_Description:
            "Poisoning by butyrophenone and thiothixene neuroleptics, undetermined, sequela",
        Location: "316754",
    },
    {
        FolderIdBarCode: 952299,
        FolderName: "Pattin",
        BoxIdBarCode: 479254,
        Folder_Description: "Pulmonary heart disease, unspecified",
        Location: "479254",
    },
    {
        FolderIdBarCode: 152954,
        FolderName: "Fedora",
        BoxIdBarCode: 137813,
        Folder_Description: "Unspecified fracture of right talus, sequela",
        Location: "137813",
    },
    {
        FolderIdBarCode: 922817,
        FolderName: "Theadora",
        BoxIdBarCode: 708658,
        Folder_Description:
            "Pedestrian on roller-skates injured in collision with heavy transport vehicle or bus in nontraffic accident, initial encounter",
        Location: "708658",
    },
    {
        FolderIdBarCode: 701107,
        FolderName: "Gustaf",
        BoxIdBarCode: 746531,
        Folder_Description:
            "Unspecified open wound of left front wall of thorax with penetration into thoracic cavity, subsequent encounter",
        Location: "746531",
    },
    {
        FolderIdBarCode: 383322,
        FolderName: "Berni",
        BoxIdBarCode: 798485,
        Folder_Description: "Unspecified injury of right renal vein, sequela",
        Location: "798485",
    },
    {
        FolderIdBarCode: 26210,
        FolderName: "Marijo",
        BoxIdBarCode: 939125,
        Folder_Description:
            "Other complications of procedures, not elsewhere classified, sequela",
        Location: "939125",
    },
    {
        FolderIdBarCode: 638681,
        FolderName: "Edin",
        BoxIdBarCode: 780435,
        Folder_Description:
            "Fracture of mandible of other specified site, subsequent encounter for fracture with routine healing",
        Location: "780435",
    },
    {
        FolderIdBarCode: 296216,
        FolderName: "Sanderson",
        BoxIdBarCode: 739374,
        Folder_Description: "Abrasion, right lower leg, subsequent encounter",
        Location: "739374",
    },
    {
        FolderIdBarCode: 677269,
        FolderName: "Erinna",
        BoxIdBarCode: 414098,
        Folder_Description:
            "Unspecified injury of muscle(s) and tendon(s) of anterior muscle group at lower leg level",
        Location: "414098",
    },
    {
        FolderIdBarCode: 9715,
        FolderName: "Perceval",
        BoxIdBarCode: 688247,
        Folder_Description:
            "Fetal anemia and thrombocytopenia, third trimester, fetus 4",
        Location: "688247",
    },
    {
        FolderIdBarCode: 677831,
        FolderName: "Morgan",
        BoxIdBarCode: 765823,
        Folder_Description:
            "Otitis externa in other diseases classified elsewhere, left ear",
        Location: "765823",
    },
    {
        FolderIdBarCode: 876208,
        FolderName: "Alwyn",
        BoxIdBarCode: 938294,
        Folder_Description:
            "Person on outside of bus injured in collision with two- or three-wheeled motor vehicle in traffic accident",
        Location: "938294",
    },
    {
        FolderIdBarCode: 851613,
        FolderName: "Gabbie",
        BoxIdBarCode: 962761,
        Folder_Description:
            "Unspecified injury of unspecified muscles, fascia and tendons at forearm level, right arm, subsequent encounter",
        Location: "962761",
    },
    {
        FolderIdBarCode: 866000,
        FolderName: "Cherey",
        BoxIdBarCode: 793388,
        Folder_Description:
            "Benign neoplasm of connective and other soft tissue, unspecified",
        Location: "793388",
    },
    {
        FolderIdBarCode: 701183,
        FolderName: "Rodi",
        BoxIdBarCode: 342550,
        Folder_Description:
            "Unspecified occupant of heavy transport vehicle injured in collision with two- or three-wheeled motor vehicle in nontraffic accident, sequela",
        Location: "342550",
    },
    {
        FolderIdBarCode: 257813,
        FolderName: "Esra",
        BoxIdBarCode: 966697,
        Folder_Description:
            "Displaced other fracture of tuberosity of left calcaneus, subsequent encounter for fracture with routine healing",
        Location: "966697",
    },
    {
        FolderIdBarCode: 153647,
        FolderName: "Doralynn",
        BoxIdBarCode: 36297,
        Folder_Description:
            "Person injured in collision between railway train or railway vehicle and car, nontraffic, initial encounter",
        Location: "36297",
    },
    {
        FolderIdBarCode: 438518,
        FolderName: "Chicky",
        BoxIdBarCode: 984768,
        Folder_Description:
            "Salter-Harris Type II physeal fracture of lower end of ulna, right arm, initial encounter for closed fracture",
        Location: "984768",
    },
    {
        FolderIdBarCode: 273019,
        FolderName: "Rutledge",
        BoxIdBarCode: 501513,
        Folder_Description:
            "Unspecified injury of unspecified innominate or subclavian vein, initial encounter",
        Location: "501513",
    },
    {
        FolderIdBarCode: 51107,
        FolderName: "Aili",
        BoxIdBarCode: 731057,
        Folder_Description:
            "Injury of other nerves at forearm level, left arm, initial encounter",
        Location: "731057",
    },
    {
        FolderIdBarCode: 167660,
        FolderName: "Desiri",
        BoxIdBarCode: 413596,
        Folder_Description:
            "Fracture of unspecified parts of lumbosacral spine and pelvis",
        Location: "413596",
    },
    {
        FolderIdBarCode: 978662,
        FolderName: "Junina",
        BoxIdBarCode: 704459,
        Folder_Description:
            "Displaced pilon fracture of right tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
        Location: "704459",
    },
    {
        FolderIdBarCode: 697992,
        FolderName: "Clayborn",
        BoxIdBarCode: 800767,
        Folder_Description:
            "Breakdown (mechanical) of internal fixation device of vertebrae, initial encounter",
        Location: "800767",
    },
    {
        FolderIdBarCode: 858290,
        FolderName: "Webster",
        BoxIdBarCode: 51289,
        Folder_Description:
            "Superficial frostbite of right hip and thigh, subsequent encounter",
        Location: "51289",
    },
    {
        FolderIdBarCode: 326397,
        FolderName: "Lizzy",
        BoxIdBarCode: 322330,
        Folder_Description:
            "Toxic effect of unspecified alcohol, intentional self-harm, subsequent encounter",
        Location: "322330",
    },
    {
        FolderIdBarCode: 397955,
        FolderName: "Aurilia",
        BoxIdBarCode: 734133,
        Folder_Description: "Other respiratory tuberculosis",
        Location: "734133",
    },
    {
        FolderIdBarCode: 127566,
        FolderName: "Adam",
        BoxIdBarCode: 509034,
        Folder_Description:
            "Laceration without foreign body, right thigh, subsequent encounter",
        Location: "509034",
    },
    {
        FolderIdBarCode: 265741,
        FolderName: "Eduino",
        BoxIdBarCode: 984854,
        Folder_Description: "External constriction, left hip, sequela",
        Location: "984854",
    },
    {
        FolderIdBarCode: 716160,
        FolderName: "Adelbert",
        BoxIdBarCode: 359962,
        Folder_Description:
            "Other paralytic syndrome following other nontraumatic intracranial hemorrhage affecting right dominant side",
        Location: "359962",
    },
    {
        FolderIdBarCode: 320890,
        FolderName: "Husain",
        BoxIdBarCode: 584452,
        Folder_Description: "Aortic aneurysm of unspecified site, ruptured",
        Location: "584452",
    },
    {
        FolderIdBarCode: 674781,
        FolderName: "Steve",
        BoxIdBarCode: 931672,
        Folder_Description: "Gestational diabetes mellitus in childbirth",
        Location: "931672",
    },
    {
        FolderIdBarCode: 213964,
        FolderName: "Sophie",
        BoxIdBarCode: 622621,
        Folder_Description:
            "Other displaced fracture of upper end of unspecified humerus, subsequent encounter for fracture with routine healing",
        Location: "622621",
    },
]
