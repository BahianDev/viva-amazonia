export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "culture",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productionCycle",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "areaSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "plantingDate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "varietiesUsed",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "fertilizersUsed",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "pesticidesUsed",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ProductionPlanCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "culture", type: "string" },
      { internalType: "string", name: "productionCycle", type: "string" },
      { internalType: "uint256", name: "areaSize", type: "uint256" },
      { internalType: "uint256", name: "plantingDate", type: "uint256" },
      { internalType: "string", name: "varietiesUsed", type: "string" },
      { internalType: "bool", name: "fertilizersUsed", type: "bool" },
      { internalType: "bool", name: "pesticidesUsed", type: "bool" },
    ],
    name: "productionPlan",
    outputs: [
      {
        components: [
          { internalType: "string", name: "culture", type: "string" },
          { internalType: "string", name: "productionCycle", type: "string" },
          { internalType: "uint256", name: "areaSize", type: "uint256" },
          { internalType: "uint256", name: "plantingDate", type: "uint256" },
          { internalType: "string", name: "varietiesUsed", type: "string" },
          { internalType: "bool", name: "fertilizersUsed", type: "bool" },
          { internalType: "bool", name: "pesticidesUsed", type: "bool" },
        ],
        internalType: "struct VivaAmazonia.ProductionPlan",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "productionPlans",
    outputs: [
      { internalType: "string", name: "culture", type: "string" },
      { internalType: "string", name: "productionCycle", type: "string" },
      { internalType: "uint256", name: "areaSize", type: "uint256" },
      { internalType: "uint256", name: "plantingDate", type: "uint256" },
      { internalType: "string", name: "varietiesUsed", type: "string" },
      { internalType: "bool", name: "fertilizersUsed", type: "bool" },
      { internalType: "bool", name: "pesticidesUsed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];


export const contractAddress = '0xB5939ec253FaF8e95EBD1528ee6d49dE936FAafC'