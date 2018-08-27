import { IUser, IBox, IFolder } from "../stores"
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
        BoxId: 323617,
        CurrentLocation: "L7957050050",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 485072,
        CurrentLocation: "5556",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 81552,
        CurrentLocation: "legal",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 739922,
        CurrentLocation: "L3971521886",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 970173,
        CurrentLocation: "L6164995787",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 62536,
        CurrentLocation: "L2338653742",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 520868,
        CurrentLocation: "L9186517090",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 978267,
        CurrentLocation: "L4551179809",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 740127,
        CurrentLocation: "L8320275040",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 909880,
        CurrentLocation: "L0484444220",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 946158,
        CurrentLocation: "L1840134305",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 749515,
        CurrentLocation: "L2352083885",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 879407,
        CurrentLocation: "legal",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 821065,
        CurrentLocation: "L7114956371",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 8644,
        CurrentLocation: "L6920993074",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 482870,
        CurrentLocation: "L5425950578",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 882980,
        CurrentLocation: "L4695700298",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 487313,
        CurrentLocation: "L9411646433",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 677058,
        CurrentLocation: "L0220868042",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 739441,
        CurrentLocation: "L1329487621",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 36641,
        CurrentLocation: "L8421437127",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 692492,
        CurrentLocation: "L8911901687",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 108299,
        CurrentLocation: "L6792267775",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 299680,
        CurrentLocation: "L5857183014",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 428508,
        CurrentLocation: "L7879253556",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 248182,
        CurrentLocation: "L5326679639",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 639433,
        CurrentLocation: "L6818600468",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 134892,
        CurrentLocation: "L4292596905",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 233369,
        CurrentLocation: "L0664729525",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 322828,
        CurrentLocation: "L7745464935",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 188473,
        CurrentLocation: "L3346974642",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 778756,
        CurrentLocation: "L9180049737",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 414234,
        CurrentLocation: "L8033470488",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 112578,
        CurrentLocation: "L3094985211",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 243813,
        CurrentLocation: "L7668245898",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 668549,
        CurrentLocation: "L9695278353",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 590200,
        CurrentLocation: "L3447552972",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 559530,
        CurrentLocation: "L7068285740",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 410344,
        CurrentLocation: "L2346291773",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 993620,
        CurrentLocation: "L7853428685",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 973179,
        CurrentLocation: "L2115963105",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 8508,
        CurrentLocation: "L1422972364",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 399414,
        CurrentLocation: "L9546484113",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 44031,
        CurrentLocation: "L6579311177",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 170988,
        CurrentLocation: "L0897439376",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 636538,
        CurrentLocation: "L2323589156",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 466286,
        CurrentLocation: "L6006381842",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 666693,
        CurrentLocation: "L4467214925",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 26898,
        CurrentLocation: "L7259627492",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 838811,
        CurrentLocation: "L3034865465",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 268623,
        CurrentLocation: "L9187117630",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 647543,
        CurrentLocation: "L8752060365",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 431949,
        CurrentLocation: "L7720588827",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 345299,
        CurrentLocation: "L7347885698",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 376131,
        CurrentLocation: "L4030706959",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 112513,
        CurrentLocation: "L0411746898",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 268822,
        CurrentLocation: "L7170579545",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 414147,
        CurrentLocation: "L7227122727",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 151645,
        CurrentLocation: "L1079588965",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 450502,
        CurrentLocation: "L9338792560",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 604250,
        CurrentLocation: "L1286052564",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 517630,
        CurrentLocation: "L6339333656",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 689905,
        CurrentLocation: "L9354077536",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 37033,
        CurrentLocation: "L1737986698",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 214564,
        CurrentLocation: "L3863202090",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 174919,
        CurrentLocation: "L8538525824",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 276617,
        CurrentLocation: "L9123045906",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 316754,
        CurrentLocation: "L6688907887",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 479254,
        CurrentLocation: "L8110805787",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 137813,
        CurrentLocation: "L5319819978",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 708658,
        CurrentLocation: "L4657589342",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 746531,
        CurrentLocation: "L6571682834",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 798485,
        CurrentLocation: "L0802286097",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 939125,
        CurrentLocation: "L5335969733",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 780435,
        CurrentLocation: "L8216711204",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 739374,
        CurrentLocation: "L2296853544",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 414098,
        CurrentLocation: "L1500727296",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 688247,
        CurrentLocation: "L8609941019",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 765823,
        CurrentLocation: "L2098081502",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 938294,
        CurrentLocation: "L8494695274",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 962761,
        CurrentLocation: "L2827959127",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 793388,
        CurrentLocation: "L1046151290",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 342550,
        CurrentLocation: "L7653928269",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 966697,
        CurrentLocation: "L4826663099",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 36297,
        CurrentLocation: "L9090303049",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 984768,
        CurrentLocation: "L6448973850",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 501513,
        CurrentLocation: "L6817740088",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 731057,
        CurrentLocation: "L1290238308",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 413596,
        CurrentLocation: "L9285153496",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 704459,
        CurrentLocation: "L0048362115",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 800767,
        CurrentLocation: "L7681839208",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 51289,
        CurrentLocation: "L0850481023",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 322330,
        CurrentLocation: "L6723291123",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 734133,
        CurrentLocation: "L4371523056",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 509034,
        CurrentLocation: "L9318952570",
        DeptId: 5559,
        DepartmentName: "Department of Business",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 984854,
        CurrentLocation: "L6051463046",
        DeptId: 5560,
        DepartmentName: "Department of Social Studies",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 359962,
        CurrentLocation: "L9102217120",
        DeptId: 5555,
        DepartmentName: "Department of Aerophysics",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 584452,
        CurrentLocation: "L8165066552",
        DeptId: 5556,
        DepartmentName: "Department of Science",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 931672,
        CurrentLocation: "L4222131296",
        DeptId: 5557,
        DepartmentName: "Department of Agriculture",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
    {
        BoxId: 622621,
        CurrentLocation: "L4372425023",
        DeptId: 5558,
        DepartmentName: "Department of Chemistry",
        BoxDescription:
            "Lorem ipsum dolor sit amet, ne sed tamquam luptatum neglegentur.",
    },
]

export const mockFolders: Array<IFolder> = [
    {
        FolderId: 537020,
        FolderName: "Traver",
        BoxId: 323617,
        FolderDescription: "Secondary spontaneous pneumothorax",
        CurrentFolderLocation: "323617",
    },
    {
        FolderId: 968305,
        FolderName: "Melisent",
        BoxId: 485072,
        FolderDescription: "Unspecified subluxation and dislocation of toe",
        CurrentFolderLocation: "485072",
    },
    {
        FolderId: 604204,
        FolderName: "Sibbie",
        BoxId: 81552,
        FolderDescription:
            "Other specified injury of axillary artery, unspecified side, sequela",
        CurrentFolderLocation: "81552",
    },
    {
        FolderId: 947662,
        FolderName: "Killie",
        BoxId: 739922,
        FolderDescription:
            "Person injured in collision between car and two- or three-wheeled motor vehicle, nontraffic, initial encounter",
        CurrentFolderLocation: "739922",
    },
    {
        FolderId: 767588,
        FolderName: "Darlleen",
        BoxId: 970173,
        FolderDescription: "Mucopolysaccharidosis, unspecified",
        CurrentFolderLocation: "970173",
    },
    {
        FolderId: 154797,
        FolderName: "Devan",
        BoxId: 62536,
        FolderDescription: "Corrosion of second degree of upper arm",
        CurrentFolderLocation: "62536",
    },
    {
        FolderId: 595930,
        FolderName: "Giordano",
        BoxId: 520868,
        FolderDescription: "Astigmatism",
        CurrentFolderLocation: "legal",
    },
    {
        FolderId: 425096,
        FolderName: "Cathrin",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "978267",
    },
    {
        FolderId: 425097,
        FolderName: "Cat",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "5556",
    },
    {
        FolderId: 658978,
        FolderName: "Frank",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "978267",
    },
    {
        FolderId: 321789,
        FolderName: "Project 007",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "978267",
    },
    {
        FolderId: 996584,
        FolderName: "Abrahm",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "978267",
    },
    {
        FolderId: 454545,
        FolderName: "Chew-Chew",
        BoxId: 978267,
        FolderDescription:
            "Other specified diabetes mellitus with hypoglycemia",
        CurrentFolderLocation: "978267",
    },

    {
        FolderId: 129584,
        FolderName: "Pete",
        BoxId: 740127,
        FolderDescription:
            "Infection and inflammatory reaction due to internal fixation device of right ulna",
        CurrentFolderLocation: "740127",
    },
    {
        FolderId: 156133,
        FolderName: "Agretha",
        BoxId: 909880,
        FolderDescription:
            "Unspecified fracture of lower end of left humerus, subsequent encounter for fracture with nonunion",
        CurrentFolderLocation: "909880",
    },
    {
        FolderId: 189660,
        FolderName: "Dukey",
        BoxId: 946158,
        FolderDescription: "Unspecified superficial injury of left ankle",
        CurrentFolderLocation: "946158",
    },
    {
        FolderId: 458046,
        FolderName: "Rachael",
        BoxId: 749515,
        FolderDescription:
            "Poisoning by selective serotonin and norepinephrine reuptake inhibitors, accidental (unintentional), initial encounter",
        CurrentFolderLocation: "749515",
    },
    {
        FolderId: 886848,
        FolderName: "Missie",
        BoxId: 879407,
        FolderDescription:
            "Collapsed vertebra, not elsewhere classified, cervicothoracic region, initial encounter for fracture",
        CurrentFolderLocation: "879407",
    },
    {
        FolderId: 55115,
        FolderName: "Virgie",
        BoxId: 821065,
        FolderDescription:
            "Passenger in pick-up truck or van injured in collision with unspecified motor vehicles in traffic accident",
        CurrentFolderLocation: "821065",
    },
    {
        FolderId: 827625,
        FolderName: "Shelton",
        BoxId: 8644,
        FolderDescription: "Congenital deformity of feet, unspecified",
        CurrentFolderLocation: "8644",
    },
    {
        FolderId: 383940,
        FolderName: "Matilde",
        BoxId: 482870,
        FolderDescription:
            "Unspecified fracture of shaft of right ulna, subsequent encounter for closed fracture with malunion",
        CurrentFolderLocation: "482870",
    },
    {
        FolderId: 940703,
        FolderName: "Ina",
        BoxId: 882980,
        FolderDescription: "Gastritis and duodenitis",
        CurrentFolderLocation: "882980",
    },
    {
        FolderId: 469782,
        FolderName: "Dunstan",
        BoxId: 487313,
        FolderDescription: "Foreign body in penis",
        CurrentFolderLocation: "487313",
    },
    {
        FolderId: 677575,
        FolderName: "Angie",
        BoxId: 677058,
        FolderDescription:
            "Underdosing of mixed bacterial vaccines without a pertussis component, subsequent encounter",
        CurrentFolderLocation: "677058",
    },
    {
        FolderId: 965328,
        FolderName: "Johannes",
        BoxId: 739441,
        FolderDescription:
            "Chagas disease (chronic) with nervous system involvement",
        CurrentFolderLocation: "739441",
    },
    {
        FolderId: 697163,
        FolderName: "Essie",
        BoxId: 36641,
        FolderDescription:
            "Toxic effect of contact with other venomous amphibian, intentional self-harm, initial encounter",
        CurrentFolderLocation: "36641",
    },
    {
        FolderId: 338677,
        FolderName: "Dawn",
        BoxId: 692492,
        FolderDescription:
            "Other specified disorders of tympanic membrane, bilateral",
        CurrentFolderLocation: "692492",
    },
    {
        FolderId: 694547,
        FolderName: "Avery",
        BoxId: 108299,
        FolderDescription:
            "Displaced fracture (avulsion) of medial epicondyle of right humerus, initial encounter for closed fracture",
        CurrentFolderLocation: "108299",
    },
    {
        FolderId: 369922,
        FolderName: "Kathye",
        BoxId: 299680,
        FolderDescription:
            "Adverse effect of unspecified antipsychotics and neuroleptics, initial encounter",
        CurrentFolderLocation: "299680",
    },
    {
        FolderId: 456554,
        FolderName: "Thedric",
        BoxId: 428508,
        FolderDescription:
            "Person on outside of pick-up truck or van injured in collision with other nonmotor vehicle in nontraffic accident, subsequent encounter",
        CurrentFolderLocation: "428508",
    },
    {
        FolderId: 762333,
        FolderName: "Reese",
        BoxId: 248182,
        FolderDescription:
            "Leakage of unspecified cardiac and vascular devices and implants, subsequent encounter",
        CurrentFolderLocation: "248182",
    },
    {
        FolderId: 906757,
        FolderName: "Hastings",
        BoxId: 639433,
        FolderDescription:
            "Injury of cutaneous sensory nerve at shoulder and upper arm level, left arm, sequela",
        CurrentFolderLocation: "639433",
    },
    {
        FolderId: 120383,
        FolderName: "Cyndi",
        BoxId: 134892,
        FolderDescription:
            "Contusion and laceration of cerebrum, unspecified, with loss of consciousness of any duration with death due to other cause prior to regaining consciousness",
        CurrentFolderLocation: "134892",
    },
    {
        FolderId: 358223,
        FolderName: "Agretha",
        BoxId: 233369,
        FolderDescription:
            "Nondisplaced comminuted fracture of shaft of right fibula, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing",
        CurrentFolderLocation: "233369",
    },
    {
        FolderId: 988675,
        FolderName: "Cassi",
        BoxId: 322828,
        FolderDescription: "Adolescent idiopathic scoliosis, site unspecified",
        CurrentFolderLocation: "322828",
    },
    {
        FolderId: 544633,
        FolderName: "Sibylle",
        BoxId: 188473,
        FolderDescription:
            "Contusion, laceration, and hemorrhage of brainstem with loss of consciousness of 31 minutes to 59 minutes, sequela",
        CurrentFolderLocation: "188473",
    },
    {
        FolderId: 953265,
        FolderName: "Haskell",
        BoxId: 778756,
        FolderDescription: "Arthritis due to other bacteria, vertebrae",
        CurrentFolderLocation: "778756",
    },
    {
        FolderId: 917495,
        FolderName: "Tomkin",
        BoxId: 414234,
        FolderDescription:
            "Displaced comminuted fracture of shaft of humerus, right arm, subsequent encounter for fracture with nonunion",
        CurrentFolderLocation: "414234",
    },
    {
        FolderId: 696079,
        FolderName: "Lauren",
        BoxId: 112578,
        FolderDescription: "Dry eye syndrome of left lacrimal gland",
        CurrentFolderLocation: "112578",
    },
    {
        FolderId: 18729,
        FolderName: "Carmelita",
        BoxId: 243813,
        FolderDescription:
            "Displaced fracture of lateral condyle of unspecified tibia, subsequent encounter for closed fracture with delayed healing",
        CurrentFolderLocation: "243813",
    },
    {
        FolderId: 107339,
        FolderName: "Danna",
        BoxId: 668549,
        FolderDescription: "Paralysis of vocal cords and larynx, unilateral",
        CurrentFolderLocation: "668549",
    },
    {
        FolderId: 902370,
        FolderName: "Stanton",
        BoxId: 590200,
        FolderDescription:
            "External constriction of part of breast, left breast",
        CurrentFolderLocation: "590200",
    },
    {
        FolderId: 962285,
        FolderName: "Umberto",
        BoxId: 559530,
        FolderDescription:
            "Poisoning by antithrombotic drugs, accidental (unintentional), sequela",
        CurrentFolderLocation: "559530",
    },
    {
        FolderId: 230233,
        FolderName: "Remy",
        BoxId: 410344,
        FolderDescription:
            "Hemorrhage due to other internal prosthetic devices, implants and grafts, initial encounter",
        CurrentFolderLocation: "410344",
    },
    {
        FolderId: 752280,
        FolderName: "Christophe",
        BoxId: 993620,
        FolderDescription: "Hyperplasia of appendix",
        CurrentFolderLocation: "993620",
    },
    {
        FolderId: 530439,
        FolderName: "Dennie",
        BoxId: 973179,
        FolderDescription:
            "Laceration of intrinsic muscle, fascia and tendon of left little finger at wrist and hand level",
        CurrentFolderLocation: "973179",
    },
    {
        FolderId: 929831,
        FolderName: "Pacorro",
        BoxId: 8508,
        FolderDescription: "Toxic effect of fiberglass, undetermined",
        CurrentFolderLocation: "8508",
    },
    {
        FolderId: 868583,
        FolderName: "Camellia",
        BoxId: 399414,
        FolderDescription: "Hypersensitivity pneumonitis due to organic dust",
        CurrentFolderLocation: "399414",
    },
    {
        FolderId: 143227,
        FolderName: "Alf",
        BoxId: 44031,
        FolderDescription:
            "Laceration of other blood vessels at hip and thigh level, left leg",
        CurrentFolderLocation: "44031",
    },
    {
        FolderId: 473771,
        FolderName: "Brandise",
        BoxId: 170988,
        FolderDescription:
            "Puncture wound without foreign body of right ring finger without damage to nail, initial encounter",
        CurrentFolderLocation: "170988",
    },
    {
        FolderId: 137512,
        FolderName: "Hobart",
        BoxId: 636538,
        FolderDescription:
            "Severely displaced Zone I fracture of sacrum, subsequent encounter for fracture with routine healing",
        CurrentFolderLocation: "636538",
    },
    {
        FolderId: 497665,
        FolderName: "Winifield",
        BoxId: 466286,
        FolderDescription:
            "Newborn affected by maternal conditions that may be unrelated to present pregnancy",
        CurrentFolderLocation: "466286",
    },
    {
        FolderId: 993863,
        FolderName: "Chen",
        BoxId: 666693,
        FolderDescription:
            "Displaced fracture of medial phalanx of right middle finger, subsequent encounter for fracture with malunion",
        CurrentFolderLocation: "666693",
    },
    {
        FolderId: 189432,
        FolderName: "Harrison",
        BoxId: 26898,
        FolderDescription: "Osteochondritis dissecans",
        CurrentFolderLocation: "26898",
    },
    {
        FolderId: 497347,
        FolderName: "Chiquita",
        BoxId: 838811,
        FolderDescription:
            "Person injured in collision between car and heavy transport vehicle, nontraffic",
        CurrentFolderLocation: "838811",
    },
    {
        FolderId: 21683,
        FolderName: "Gardy",
        BoxId: 268623,
        FolderDescription: "Primary syphilis of other sites",
        CurrentFolderLocation: "268623",
    },
    {
        FolderId: 524970,
        FolderName: "Philbert",
        BoxId: 647543,
        FolderDescription:
            "Unspecified fracture of unspecified forearm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
        CurrentFolderLocation: "647543",
    },
    {
        FolderId: 71829,
        FolderName: "Annalise",
        BoxId: 431949,
        FolderDescription:
            "Legal intervention involving other explosives, bystander injured, subsequent encounter",
        CurrentFolderLocation: "431949",
    },
    {
        FolderId: 472817,
        FolderName: "Betteanne",
        BoxId: 345299,
        FolderDescription: "Hypertrophy of bone, left radius",
        CurrentFolderLocation: "345299",
    },
    {
        FolderId: 820242,
        FolderName: "Dalt",
        BoxId: 376131,
        FolderDescription:
            "Subluxation of unspecified interphalangeal joint of unspecified thumb, initial encounter",
        CurrentFolderLocation: "376131",
    },
    {
        FolderId: 277245,
        FolderName: "Donni",
        BoxId: 112513,
        FolderDescription:
            "Nondisplaced osteochondral fracture of left patella, subsequent encounter for open fracture type I or II with malunion",
        CurrentFolderLocation: "112513",
    },
    {
        FolderId: 361718,
        FolderName: "Amelita",
        BoxId: 268822,
        FolderDescription: "Postlaminectomy kyphosis",
        CurrentFolderLocation: "268822",
    },
    {
        FolderId: 745389,
        FolderName: "Sherlocke",
        BoxId: 414147,
        FolderDescription:
            "Terrorism involving fires, conflagration and hot substances, public safety official injured, initial encounter",
        CurrentFolderLocation: "414147",
    },
    {
        FolderId: 885307,
        FolderName: "Dorella",
        BoxId: 151645,
        FolderDescription: "Chronic myelomonocytic leukemia",
        CurrentFolderLocation: "151645",
    },
    {
        FolderId: 598325,
        FolderName: "Miguela",
        BoxId: 450502,
        FolderDescription: "Monteggias fracture of right ulna, sequela",
        CurrentFolderLocation: "450502",
    },
    {
        FolderId: 377273,
        FolderName: "Costanza",
        BoxId: 604250,
        FolderDescription:
            "Legal intervention involving baton, bystander injured, subsequent encounter",
        CurrentFolderLocation: "604250",
    },
    {
        FolderId: 662947,
        FolderName: "Koren",
        BoxId: 517630,
        FolderDescription:
            "Diseases of the digestive system complicating childbirth",
        CurrentFolderLocation: "517630",
    },
    {
        FolderId: 372218,
        FolderName: "Bondie",
        BoxId: 689905,
        FolderDescription:
            "Sprain of other ligament of left ankle, subsequent encounter",
        CurrentFolderLocation: "689905",
    },
    {
        FolderId: 908045,
        FolderName: "Lyndy",
        BoxId: 37033,
        FolderDescription:
            "Military operation involving nuclear radiation effects of nuclear weapon, military personnel, subsequent encounter",
        CurrentFolderLocation: "37033",
    },
    {
        FolderId: 321729,
        FolderName: "Rocky",
        BoxId: 214564,
        FolderDescription:
            "Displaced transverse fracture of shaft of right fibula, subsequent encounter for closed fracture with delayed healing",
        CurrentFolderLocation: "214564",
    },
    {
        FolderId: 194578,
        FolderName: "Carlo",
        BoxId: 174919,
        FolderDescription: "Corrosion of mouth and pharynx",
        CurrentFolderLocation: "174919",
    },
    {
        FolderId: 436692,
        FolderName: "Maryann",
        BoxId: 276617,
        FolderDescription:
            "Unspecified injury of extensor muscle, fascia and tendon of right thumb at wrist and hand level",
        CurrentFolderLocation: "276617",
    },
    {
        FolderId: 975379,
        FolderName: "Walther",
        BoxId: 316754,
        FolderDescription:
            "Poisoning by butyrophenone and thiothixene neuroleptics, undetermined, sequela",
        CurrentFolderLocation: "316754",
    },
    {
        FolderId: 952299,
        FolderName: "Pattin",
        BoxId: 479254,
        FolderDescription: "Pulmonary heart disease, unspecified",
        CurrentFolderLocation: "479254",
    },
    {
        FolderId: 152954,
        FolderName: "Fedora",
        BoxId: 137813,
        FolderDescription: "Unspecified fracture of right talus, sequela",
        CurrentFolderLocation: "137813",
    },
    {
        FolderId: 922817,
        FolderName: "Theadora",
        BoxId: 708658,
        FolderDescription:
            "Pedestrian on roller-skates injured in collision with heavy transport vehicle or bus in nontraffic accident, initial encounter",
        CurrentFolderLocation: "708658",
    },
    {
        FolderId: 701107,
        FolderName: "Gustaf",
        BoxId: 746531,
        FolderDescription:
            "Unspecified open wound of left front wall of thorax with penetration into thoracic cavity, subsequent encounter",
        CurrentFolderLocation: "746531",
    },
    {
        FolderId: 383322,
        FolderName: "Berni",
        BoxId: 798485,
        FolderDescription: "Unspecified injury of right renal vein, sequela",
        CurrentFolderLocation: "798485",
    },
    {
        FolderId: 26210,
        FolderName: "Marijo",
        BoxId: 939125,
        FolderDescription:
            "Other complications of procedures, not elsewhere classified, sequela",
        CurrentFolderLocation: "939125",
    },
    {
        FolderId: 638681,
        FolderName: "Edin",
        BoxId: 780435,
        FolderDescription:
            "Fracture of mandible of other specified site, subsequent encounter for fracture with routine healing",
        CurrentFolderLocation: "780435",
    },
    {
        FolderId: 296216,
        FolderName: "Sanderson",
        BoxId: 739374,
        FolderDescription: "Abrasion, right lower leg, subsequent encounter",
        CurrentFolderLocation: "739374",
    },
    {
        FolderId: 677269,
        FolderName: "Erinna",
        BoxId: 414098,
        FolderDescription:
            "Unspecified injury of muscle(s) and tendon(s) of anterior muscle group at lower leg level",
        CurrentFolderLocation: "414098",
    },
    {
        FolderId: 9715,
        FolderName: "Perceval",
        BoxId: 688247,
        FolderDescription:
            "Fetal anemia and thrombocytopenia, third trimester, fetus 4",
        CurrentFolderLocation: "688247",
    },
    {
        FolderId: 677831,
        FolderName: "Morgan",
        BoxId: 765823,
        FolderDescription:
            "Otitis externa in other diseases classified elsewhere, left ear",
        CurrentFolderLocation: "765823",
    },
    {
        FolderId: 876208,
        FolderName: "Alwyn",
        BoxId: 938294,
        FolderDescription:
            "Person on outside of bus injured in collision with two- or three-wheeled motor vehicle in traffic accident",
        CurrentFolderLocation: "938294",
    },
    {
        FolderId: 851613,
        FolderName: "Gabbie",
        BoxId: 962761,
        FolderDescription:
            "Unspecified injury of unspecified muscles, fascia and tendons at forearm level, right arm, subsequent encounter",
        CurrentFolderLocation: "962761",
    },
    {
        FolderId: 866000,
        FolderName: "Cherey",
        BoxId: 793388,
        FolderDescription:
            "Benign neoplasm of connective and other soft tissue, unspecified",
        CurrentFolderLocation: "793388",
    },
    {
        FolderId: 701183,
        FolderName: "Rodi",
        BoxId: 342550,
        FolderDescription:
            "Unspecified occupant of heavy transport vehicle injured in collision with two- or three-wheeled motor vehicle in nontraffic accident, sequela",
        CurrentFolderLocation: "342550",
    },
    {
        FolderId: 257813,
        FolderName: "Esra",
        BoxId: 966697,
        FolderDescription:
            "Displaced other fracture of tuberosity of left calcaneus, subsequent encounter for fracture with routine healing",
        CurrentFolderLocation: "966697",
    },
    {
        FolderId: 153647,
        FolderName: "Doralynn",
        BoxId: 36297,
        FolderDescription:
            "Person injured in collision between railway train or railway vehicle and car, nontraffic, initial encounter",
        CurrentFolderLocation: "36297",
    },
    {
        FolderId: 438518,
        FolderName: "Chicky",
        BoxId: 984768,
        FolderDescription:
            "Salter-Harris Type II physeal fracture of lower end of ulna, right arm, initial encounter for closed fracture",
        CurrentFolderLocation: "984768",
    },
    {
        FolderId: 273019,
        FolderName: "Rutledge",
        BoxId: 501513,
        FolderDescription:
            "Unspecified injury of unspecified innominate or subclavian vein, initial encounter",
        CurrentFolderLocation: "501513",
    },
    {
        FolderId: 51107,
        FolderName: "Aili",
        BoxId: 731057,
        FolderDescription:
            "Injury of other nerves at forearm level, left arm, initial encounter",
        CurrentFolderLocation: "731057",
    },
    {
        FolderId: 167660,
        FolderName: "Desiri",
        BoxId: 413596,
        FolderDescription:
            "Fracture of unspecified parts of lumbosacral spine and pelvis",
        CurrentFolderLocation: "413596",
    },
    {
        FolderId: 978662,
        FolderName: "Junina",
        BoxId: 704459,
        FolderDescription:
            "Displaced pilon fracture of right tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
        CurrentFolderLocation: "704459",
    },
    {
        FolderId: 697992,
        FolderName: "Clayborn",
        BoxId: 800767,
        FolderDescription:
            "Breakdown (mechanical) of internal fixation device of vertebrae, initial encounter",
        CurrentFolderLocation: "800767",
    },
    {
        FolderId: 858290,
        FolderName: "Webster",
        BoxId: 51289,
        FolderDescription:
            "Superficial frostbite of right hip and thigh, subsequent encounter",
        CurrentFolderLocation: "51289",
    },
    {
        FolderId: 326397,
        FolderName: "Lizzy",
        BoxId: 322330,
        FolderDescription:
            "Toxic effect of unspecified alcohol, intentional self-harm, subsequent encounter",
        CurrentFolderLocation: "322330",
    },
    {
        FolderId: 397955,
        FolderName: "Aurilia",
        BoxId: 734133,
        FolderDescription: "Other respiratory tuberculosis",
        CurrentFolderLocation: "734133",
    },
    {
        FolderId: 127566,
        FolderName: "Adam",
        BoxId: 509034,
        FolderDescription:
            "Laceration without foreign body, right thigh, subsequent encounter",
        CurrentFolderLocation: "509034",
    },
    {
        FolderId: 265741,
        FolderName: "Eduino",
        BoxId: 984854,
        FolderDescription: "External constriction, left hip, sequela",
        CurrentFolderLocation: "984854",
    },
    {
        FolderId: 716160,
        FolderName: "Adelbert",
        BoxId: 359962,
        FolderDescription:
            "Other paralytic syndrome following other nontraumatic intracranial hemorrhage affecting right dominant side",
        CurrentFolderLocation: "359962",
    },
    {
        FolderId: 320890,
        FolderName: "Husain",
        BoxId: 584452,
        FolderDescription: "Aortic aneurysm of unspecified site, ruptured",
        CurrentFolderLocation: "584452",
    },
    {
        FolderId: 674781,
        FolderName: "Steve",
        BoxId: 931672,
        FolderDescription: "Gestational diabetes mellitus in childbirth",
        CurrentFolderLocation: "931672",
    },
    {
        FolderId: 213964,
        FolderName: "Sophie",
        BoxId: 622621,
        FolderDescription:
            "Other displaced fracture of upper end of unspecified humerus, subsequent encounter for fracture with routine healing",
        CurrentFolderLocation: "622621",
    },
]
