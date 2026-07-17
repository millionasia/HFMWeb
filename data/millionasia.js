const localized = (zh, en) => ({ zh, en })

const machineFeatureSet = {
  rf: [
    localized('高週波輸出穩定，適合連續生產。', 'Stable high-frequency output for continuous production.'),
    localized('可依產品尺寸、模具與產能需求客製。', 'Customizable by product size, tooling and capacity targets.'),
    localized('重視火花防止、操作安全與維修便利性。', 'Designed around spark prevention, operator safety and service access.')
  ],
  line: [
    localized('可銜接前後段設備，規劃整廠動線。', 'Can connect upstream and downstream equipment for plant layout planning.'),
    localized('依材料、節拍與場地條件配置機型。', 'Specified by material, takt time and site conditions.'),
    localized('支援試車、教育訓練與售後服務。', 'Supports commissioning, training and after-sales service.')
  ],
  heat: [
    localized('適用局部加熱、熔接、埋植與金屬熱處理。', 'Suitable for localized heating, welding, planting and heat treatment.'),
    localized('加熱快速，降低非必要熱影響範圍。', 'Fast heating with a reduced unnecessary heat-affected area.'),
    localized('可搭配治具、輸送與品質檢查流程。', 'Can work with fixtures, conveying and QA workflows.')
  ],
  drying: [
    localized('以高週波能量改善纖維與材料乾燥均勻性。', 'Uses RF energy to improve drying uniformity for fibers and materials.'),
    localized('可縮短乾燥時間並降低場地壓力。', 'Can shorten drying time and reduce floor-space pressure.'),
    localized('適合批次或連續式乾燥製程評估。', 'Suitable for batch or continuous drying process evaluation.')
  ]
}

const spec = (zhLabel, enLabel, zhValue, enValue) => ({
  label: localized(zhLabel, enLabel),
  value: localized(zhValue, enValue)
})

const raw = {
  site: {
    name: localized('賀民企業高週波', 'HFM'),
    legalName: localized('賀民企業有限公司', 'Her Min High Frequency Preheating Machine Co., Ltd.'),
    logoAlt: localized('賀民企業有限公司標誌', 'Her Min company logo'),
    designedBy: localized('米亞科技設計', 'Designed by Million Asia'),
    tagline: localized('高週波預熱、熔接、乾燥與金屬加熱設備製造', 'High-frequency preheating, welding, drying and metal heating equipment'),
    summary: localized(
      '賀民企業自 1981 年創立於台灣，專精高週波設備設計製造，提供塑膠熔接、乾燥、金屬熱處理與整廠設備承包服務。',
      'Founded in Taiwan in 1981, HFM specializes in high-frequency equipment design and manufacturing for plastic welding, drying, metal heat treatment and turnkey systems.'
    ),
    seoDescription: localized(
      '賀民企業有限公司專業製造高週波塑膠熔接機、金屬熱處理機、高週波乾燥機與整廠設備，可依需求客製特殊專用機型。',
      'HFM manufactures high-frequency plastic welding machines, metal heating machines, RF drying machines and turnkey equipment, with custom-built systems available.'
    ),
    founded: '1981',
    email: 'paul438438@gmail.com',
    emails: ['paul438438@gmail.com'],
    phone: localized('03-349-1067 or 03-349-1068', '886-3-349-1067 or 886-3-349-1068'),
    telLinks: ['+88633491067', '+88633491068'],
    fax: localized('03-349-8823', '886-3-349-8823'),
    companyAddressLabel: localized('公司地址', 'COMPANY'),
    companyAddress: localized('238新北市樹林區三俊街 159 巷 13 號', 'NO.13, LANE 159, SANJUN ST. SHULIN DIST., NEW TAIPEI CITY 238, TAIWAN.'),
    address: localized('333 桃園市龜山區豐榮街一巷161之13號', 'No.161-13, Ln. 1, Fengrong St., Guishan Township, Taoyuan County 333, Taiwan (R.O.C.)'),
    contactPerson: localized('黃寶萱(Paul)', 'Paul Huang'),
    heroImage: '/images/products/hfm-factory.jpg',
    logo: '/images/hfm-logo.svg'
  },
  navigation: [
    { label: localized('首頁', 'Home'), to: '/' },
    { label: localized('產品設備', 'Products'), to: '/products' },
    { label: localized('應用服務', 'Applications'), to: '/applications' },
    { label: localized('關於賀民', 'About'), to: '/about' },
    { label: localized('聯絡我們', 'Contact'), to: '/contact' }
  ],
  highlights: [
    {
      value: '1981',
      label: localized('創立於台灣', 'Founded in Taiwan'),
      detail: localized('長期投入高頻設備的設計製造與技術開發。', 'Long-term commitment to high-frequency equipment design, manufacturing and development.')
    },
    {
      value: '4',
      label: localized('核心設備類別', 'Core equipment fields'),
      detail: localized('整廠設備、金屬熱處理、塑膠熔接與高週波乾燥。', 'Turnkey equipment, metal heat treatment, plastic welding and RF drying.')
    },
    {
      value: '60%',
      label: localized('產品外銷比例', 'Export-oriented production'),
      detail: localized('舊站資料記載約六成產品外銷，服務市場橫跨亞洲、中東、美洲與非洲。', 'Legacy company data notes roughly 60% export production across Asia, the Middle East, the Americas and Africa.')
    }
  ],
  productCategories: [
    {
      slug: 'turnkey-equipment',
      name: localized('整廠設備系列', 'Installation of Factory'),
      summary: localized('依客戶製程、產能與場地條件規劃特殊專用機型與整廠設備承包。', 'Custom machine design and turnkey plant equipment by process, capacity and site constraints.'),
      image: '/images/products/hfm-factory.jpg'
    },
    {
      slug: 'metal-heat-treatment',
      name: localized('金屬熱處理機類', 'Metal Heating Machine'),
      summary: localized('提供鋼管熔接、螺絲埋植、金屬網埋植與局部加熱處理設備。', 'Pipe making, screw planting, metallic net planting and localized heating systems.'),
      image: '/images/products/metal-heat-treatment.jpg'
    },
    {
      slug: 'plastic-welding',
      name: localized('塑膠熔接機類', 'Plastic Welding Machine'),
      summary: localized('涵蓋泡殼密著包裝、帆布熔接、滑台式、自動送料與同時熔斷機型。', 'Blister packaging, canvas bonding, shuttle tables, auto feeding and simultaneous welding/cutting machines.'),
      image: '/images/products/plastic-welding.jpg'
    },
    {
      slug: 'rf-drying',
      name: localized('高週波乾燥機類', 'Drying Machine'),
      summary: localized('以高週波能量提升纖維、材料與複合製程的乾燥效率與均勻性。', 'RF drying improves efficiency and uniformity for fibers, materials and composite processes.'),
      image: '/images/products/rf-fiber-drying.jpg'
    }
  ],
  products: [
    {
      slug: 'microcomputer-slicer',
      category: 'turnkey-equipment',
      model: 'TCC-360',
      name: localized('微電腦切片機', 'Microcomputer Slicer'),
      intro: localized('整廠設備系列中的切片加工設備，可納入前後段產線規劃。', 'A slicing machine within turnkey equipment planning, suitable for integration with upstream and downstream workflows.'),
      summary: localized('整廠設備切片加工機型。', 'Slicing equipment for turnkey production lines.'),
      features: machineFeatureSet.line,
      specs: [
        spec('系列', 'Series', '整廠設備系列', 'Installation of Factory'),
        spec('型號', 'Model', 'TCC-360', 'TCC-360'),
        spec('導入方式', 'Integration', '單機或產線模組', 'Standalone or line module')
      ],
      image: '/images/products/microcomputer-slicer.jpg'
    },
    {
      slug: 'multi-knife-slitter',
      category: 'turnkey-equipment',
      model: 'TH-20',
      name: localized('多刀分條機', 'Multi-Knife Slitter'),
      intro: localized('適合需要分條、裁切與連續加工的產線，可依材料寬度與製程節拍調整。', 'For slitting, cutting and continuous processing lines, adjustable by material width and takt time.'),
      summary: localized('多刀分條與連續加工設備。', 'Multi-knife slitting and continuous processing equipment.'),
      features: machineFeatureSet.line,
      specs: [
        spec('系列', 'Series', '整廠設備系列', 'Installation of Factory'),
        spec('型號', 'Model', 'TH-20', 'TH-20'),
        spec('適用', 'Use', '客製化整廠流程', 'Custom turnkey workflows')
      ],
      image: '/images/products/multi-knife-slitter.jpg'
    },
    {
      slug: 'pipe-making-machine',
      category: 'metal-heat-treatment',
      model: 'TCM-100-208',
      name: localized('高週波鋼管熔接機', 'High Frequency Pipe Making Machine'),
      intro: localized('用於鋼管製造與高效率熔接製程，可規劃完整鋼管製造設備。', 'For steel pipe manufacturing and high-efficiency welding processes, with complete pipe-making line planning available.'),
      summary: localized('鋼管製造與高週波熔接設備。', 'Steel pipe making and high-frequency welding equipment.'),
      features: machineFeatureSet.heat,
      specs: [
        spec('系列', 'Series', '金屬熱處理機類', 'Metal Heating Machine'),
        spec('型號', 'Model', 'TCM-100-208', 'TCM-100-208'),
        spec('應用', 'Application', '鋼管熔接、成形與整線設備', 'Pipe welding, forming and line equipment')
      ],
      image: '/images/products/metal-heat-treatment.jpg'
    },
    {
      slug: 'screw-planting-machine',
      category: 'metal-heat-treatment',
      model: 'TCM-12-202',
      name: localized('高週波螺絲埋植專用機', 'High Frequency Screws Planting Machine'),
      intro: localized('針對螺絲與金屬件埋植製程設計，適合需要穩定定位與局部加熱的產品。', 'Designed for screw and metal-part planting processes that require stable positioning and localized heating.'),
      summary: localized('螺絲與金屬件埋植設備。', 'Screw and metal-part planting equipment.'),
      features: machineFeatureSet.heat,
      specs: [
        spec('系列', 'Series', '金屬熱處理機類', 'Metal Heating Machine'),
        spec('型號', 'Model', 'TCM-12-202', 'TCM-12-202'),
        spec('應用', 'Application', '螺絲埋植、金屬網埋植', 'Screw planting and metallic net planting')
      ],
      image: '/images/products/screw-planting.jpg'
    },
    {
      slug: 'rolling-heat-paste-bonding-machine',
      category: 'metal-heat-treatment',
      model: 'TCN-50',
      name: localized('滾輪式自動熱貼合機', 'Auto-Rolling Heat Paste Bonding Machine'),
      intro: localized('滾輪式連續貼合設備，適合需要穩定送料與貼合品質的加工流程。', 'A rolling continuous bonding machine for processes that require stable feeding and bonding quality.'),
      summary: localized('滾輪式連續熱貼合設備。', 'Rolling continuous heat bonding equipment.'),
      features: machineFeatureSet.heat,
      specs: [
        spec('系列', 'Series', '金屬熱處理機類', 'Metal Heating Machine'),
        spec('型號', 'Model', 'TCN-50 / TCN-100 / TCN-140', 'TCN-50 / TCN-100 / TCN-140'),
        spec('製程', 'Process', '自動熱貼合', 'Auto heat paste bonding')
      ],
      image: '/images/products/rolling-heat-paste.jpg'
    },
    {
      slug: 'auto-lutestring-heat-paste-bonding-machine',
      category: 'plastic-welding',
      model: 'TCN-50-A',
      name: localized('自動織帶熱貼合機', 'Auto Lutestring Heat Paste Bonding Machine'),
      intro: localized('針對織帶與帶材貼合加工設計，可依材料寬度與加工方式配置。', 'Designed for webbing and strap bonding, configurable by material width and processing method.'),
      summary: localized('織帶與帶材自動熱貼合。', 'Automatic heat bonding for webbing and straps.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCN-50-A', 'TCN-50-A'),
        spec('材料', 'Materials', '織帶、帶材、貼合材料', 'Webbing, straps and bonding materials')
      ],
      image: '/images/products/lutestring-heat-paste.jpg'
    },
    {
      slug: 'simultaneous-weld-cut-machine',
      category: 'plastic-welding',
      model: 'TCP-15-107',
      name: localized('高週波同時熔斷機', 'High Frequency Simultaneous Weld & Cutting Machine'),
      intro: localized('整合高週波熔接與切斷，適合合成皮、商標、鞋類配件與 PVC 膠布產品。', 'Combines RF welding and cutting for synthetic leather, labels, shoe components and PVC-coated products.'),
      summary: localized('熔接與切斷同步完成。', 'Welding and cutting in one operation.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-15-107', 'TCP-15-107'),
        spec('製程', 'Process', '熔接、熔斷、成形', 'Welding, cutting and forming')
      ],
      image: '/images/products/simultaneous-weld-cut.jpg'
    },
    {
      slug: 'plastic-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-15-115',
      name: localized('高週波塑膠熔接機', 'High Frequency Plastic Welding Machine'),
      intro: localized('適用 PVC 吹氣玩具、文具、包裝與汽車配件等塑膠熔接加工。', 'For RF welding of PVC inflatable goods, stationery, packaging and automotive parts.'),
      summary: localized('PVC、TPU 與薄膜熔接主力機型。', 'Main RF welding model for PVC, TPU and films.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-15-115', 'TCP-15-115'),
        spec('材料', 'Materials', 'PVC、TPU、EVA、複合薄膜', 'PVC, TPU, EVA and laminated films')
      ],
      image: '/images/products/plastic-welding.jpg'
    },
    {
      slug: 'large-plastic-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-35-109',
      name: localized('高週波塑膠熔接機', 'High Frequency Plastic Welding Machine'),
      intro: localized('較大型塑膠熔接設備，適合需要更大加工面積與穩定壓合的產品。', 'A larger RF welding configuration for bigger work areas and stable pressing requirements.'),
      summary: localized('大型塑膠熔接加工。', 'Large-format plastic welding.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-35-109', 'TCP-35-109'),
        spec('配置', 'Configuration', '可依模具與產品尺寸調整', 'Configured by tooling and product size')
      ],
      image: '/images/products/plastic-welding-35.jpg'
    },
    {
      slug: 'foot-pedal-plastic-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-4-101',
      name: localized('高週波腳踏式塑膠熔接機', 'High Frequency Foot Pedal Plastic Welding Machine'),
      intro: localized('腳踏式操作機型，適合中小型塑膠熔接與樣品、小批量加工。', 'Foot-pedal operation for small to medium RF welding, samples and smaller production runs.'),
      summary: localized('腳踏式中小型熔接設備。', 'Foot-pedal small to medium welding equipment.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-4-101 / TCP-8-102', 'TCP-4-101 / TCP-8-102'),
        spec('操作', 'Operation', '腳踏式', 'Foot-pedal')
      ],
      image: '/images/products/foot-pedal-plastic-welding.jpg'
    },
    {
      slug: 'dvd-plastic-membrane-package-machine',
      category: 'plastic-welding',
      model: 'TCP-600W',
      name: localized('DVD盒塑膠膜包裝機', 'DVD Plastic Membrane Package Machine'),
      intro: localized('用於 DVD 盒與類似產品塑膠膜包裝加工，可配合包裝製程調整。', 'For plastic film packaging of DVD cases and similar products, adaptable to packaging workflows.'),
      summary: localized('塑膠膜包裝專用設備。', 'Plastic film packaging equipment.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-600W', 'TCP-600W'),
        spec('應用', 'Application', 'DVD 盒與塑膠膜包裝', 'DVD cases and plastic film packaging')
      ],
      image: '/images/products/dvd-packaging.jpg'
    },
    {
      slug: 'auto-feeding-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-8-104',
      name: localized('高週波自動送料塑膠熔接機', 'High Frequency Auto Feeding Welding Machine'),
      intro: localized('自動送料提升加工效率，適合重複性高、節拍明確的塑膠熔接流程。', 'Auto feeding improves productivity for repeatable plastic welding processes with clear takt times.'),
      summary: localized('自動送料塑膠熔接。', 'Auto feeding plastic welding.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-104', 'TCP-8-104'),
        spec('自動化', 'Automation', '自動送料', 'Auto feeding')
      ],
      image: '/images/products/auto-feeding-welding.jpg'
    },
    {
      slug: 'shuttle-table-plastic-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-8-105',
      name: localized('高週波滑台式塑膠熔接機', 'High Frequency Shuttle Table Plastic Welding Machine'),
      intro: localized('滑台式結構提升上下料效率，適合中型玩具、文具、包裝與汽車配件。', 'A shuttle table structure improves loading efficiency for medium toys, stationery, packaging and automotive parts.'),
      summary: localized('滑台式塑膠熔接主力機。', 'Shuttle table RF plastic welding machine.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-105', 'TCP-8-105'),
        spec('平台', 'Table', '滑台式', 'Shuttle table')
      ],
      image: '/images/products/shuttle-table-welding.jpg'
    },
    {
      slug: 'auto-canvas-bonding-machine',
      category: 'plastic-welding',
      model: 'TCP-8-106',
      name: localized('高週波自動帆布熔接機', 'High Frequency Auto Canvas Bonding Machine'),
      intro: localized('適合帆布、雨遮、帳篷與大型柔性材料熔接，可規劃自動化送料。', 'For canvas, awnings, tents and large flexible material bonding, with automation planning available.'),
      summary: localized('帆布與大型柔性材料熔接。', 'Canvas and large flexible material bonding.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-106', 'TCP-8-106'),
        spec('應用', 'Application', '帆布、雨遮、帳篷', 'Canvas, awnings and tents')
      ],
      image: '/images/products/auto-canvas-bonding.jpg'
    },
    {
      slug: 'canvas-bonding-machine',
      category: 'plastic-welding',
      model: 'TCP-8-112',
      name: localized('高週波帆布熔接機', 'High Frequency Canvas Bonding Machine'),
      intro: localized('氣壓式帆布熔接機型，熔接面積大、拉力強，適用帆布折邊與容器封口。', 'A pneumatic canvas bonding machine with larger welding area and strong pull strength, suitable for hemming and sealing.'),
      summary: localized('帆布折邊、封口與大面積熔接。', 'Canvas hemming, sealing and large-area bonding.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-112 / TCP-10-112', 'TCP-8-112 / TCP-10-112'),
        spec('驅動', 'Drive', '氣壓式', 'Pneumatic')
      ],
      image: '/images/products/canvas-bonding.jpg'
    },
    {
      slug: 'treadling-weld-cut-machine',
      category: 'plastic-welding',
      model: 'TCP-8-126-B',
      name: localized('多功能腳踏空油壓同時熔斷機', 'Treading Simultaneous Welding & Cutting Machine'),
      intro: localized('多功能空油壓設計，適合印刷後產品、商標、鞋類配件與皮革類加工。', 'A multifunction pneumatic-hydraulic design for printed goods, labels, shoe components and leather-like products.'),
      summary: localized('空油壓多功能熔接熔斷。', 'Multifunction pneumatic-hydraulic welding and cutting.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-126-B', 'TCP-8-126-B'),
        spec('壓力', 'Pressure', '熔著壓力與熔斷壓力可分別調整', 'Separate welding and cutting pressure adjustment')
      ],
      image: '/images/products/treadling-weld-cut.jpg'
    },
    {
      slug: 'blister-package-sealing-machine',
      category: 'plastic-welding',
      model: 'TCP-8-127',
      name: localized('高週波旋盤式泡殼密著包裝機', 'High Frequency Rotary Plate Blister Package Sealing Machine'),
      intro: localized('旋盤式泡殼包裝設備，適合包裝加工與多工位節拍生產。', 'A rotary blister packaging machine suited to packaging workflows and multi-station production.'),
      summary: localized('旋盤式泡殼密著包裝。', 'Rotary blister package sealing.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-127', 'TCP-8-127'),
        spec('平台', 'Table', '旋盤式', 'Rotary plate')
      ],
      image: '/images/products/blister-packaging.jpg'
    },
    {
      slug: 'auto-round-rotary-plate-plastic-welding-machine',
      category: 'plastic-welding',
      model: 'TCP-8-127-AR',
      name: localized('高週波四分割圓盤式塑膠熔接機', 'High Frequency Auto-Round Rotary Plate Plastic Welding Machine'),
      intro: localized('四分割圓盤式配置，適合需要多工位輪替與穩定節拍的塑膠熔接。', 'A four-station rotary configuration for stable multi-station plastic welding production.'),
      summary: localized('四分割圓盤式塑膠熔接。', 'Four-station rotary plastic welding.'),
      features: machineFeatureSet.rf,
      specs: [
        spec('系列', 'Series', '塑膠熔接機類', 'Plastic Welding Machine'),
        spec('型號', 'Model', 'TCP-8-127-AR', 'TCP-8-127-AR'),
        spec('工位', 'Stations', '四分割圓盤式', 'Four-station rotary plate')
      ],
      image: '/images/products/rotary-plastic-welding.jpg'
    },
    {
      slug: 'rf-fiber-drying-machine',
      category: 'rf-drying',
      model: 'TCR-80',
      name: localized('高週波纖維乾燥機', 'High Frequency Fibre Drying Machine'),
      intro: localized('以高週波能量縮短纖維乾燥時間，改善內外含水不均與乾燥效率問題。', 'Uses RF energy to shorten fiber drying time and improve moisture uniformity and drying efficiency.'),
      summary: localized('纖維與材料高週波乾燥。', 'RF drying for fibers and materials.'),
      features: machineFeatureSet.drying,
      specs: [
        spec('系列', 'Series', '高週波乾燥機類', 'Drying Machine'),
        spec('型號', 'Model', 'TCR-80', 'TCR-80'),
        spec('製程', 'Process', '高週波纖維乾燥', 'High-frequency fibre drying')
      ],
      image: '/images/products/rf-fiber-drying.jpg'
    }
  ],
  applications: [
    {
      title: localized('製程診斷', 'Process Diagnosis'),
      text: localized('從材料、含水率、加熱曲線、產能與安全條件開始盤點，讓設備規格回到真實製程需求。', 'Clarify material, moisture, heating curves, capacity and safety conditions so equipment specs start from the real process need.')
    },
    {
      title: localized('設備工程', 'Equipment Engineering'),
      text: localized('整合高週波發振、壓合、治具、油壓、氣壓、PLC/HMI 與維修空間，讓設備更適合現場操作。', 'Integrate RF generation, pressing, fixtures, hydraulics, pneumatics, PLC/HMI and service access for practical shop-floor use.')
    },
    {
      title: localized('整廠承包', 'Turnkey Delivery'),
      text: localized('可依客戶需求訂製特殊專用機型，並協助整廠設備配置、試車、教育訓練與售後服務。', 'Custom-built machines and turnkey equipment planning, commissioning, training and after-sales support are available by requirement.')
    }
  ],
  process: [
    localized('需求盤點', 'Discovery'),
    localized('製程測試', 'Process Test'),
    localized('設備設計', 'Engineering'),
    localized('製造組裝', 'Build'),
    localized('試車驗收', 'Acceptance')
  ],
  about: {
    profile: {
      title: localized('公司簡介', 'Company Profile'),
      paragraphs: [
        localized(
          '賀民是專業高週波製造廠，具備超過 20 年精密高週波機械製造及出口經驗。公司自成立以來持續維持研究開發能力，重視自動化、人性化與售後服務。',
          'HFM is a professional high-frequency machinery manufacturer with more than 20 years of experience in precision machinery manufacturing and export. Since its founding, the company has maintained R&D capability and focused on automation, human-centered operation and after-sales service.'
        ),
        localized(
          '產品涵蓋高週波樹脂預熱機、塑膠熔接機、熱處理機、鋼管製造機、纖維乾燥機、泡殼包裝機、金屬網埋植機與同時熔斷機等多種設備。',
          'Its machines include RF resin preheating machines, plastic welding machines, heat treatment machines, steel pipe making machines, fiber drying machines, blister sealing packagers, metallic net planting machines and simultaneous welding/cutting machines.'
        ),
        localized(
          '舊站資料記載，賀民產品外銷至馬來西亞、泰國、印尼、菲律賓、越南、新加坡、中國大陸、斯里蘭卡、印度、阿拉伯聯合大公國與沙烏地阿拉伯等國家。',
          'The legacy company data notes export markets including Malaysia, Thailand, Indonesia, the Philippines, Vietnam, Singapore, mainland China, Sri Lanka, India, the U.A.E. and Saudi Arabia.'
        )
      ]
    },
    history: {
      title: localized('歷史沿革', 'History'),
      paragraphs: [
        localized(
          '賀民企業有限公司創建於 1981 年，立足台灣並專精於高頻設備設計製造，長期在塑膠熔接、乾燥與金屬熱處理設備領域累積技術。',
          'Min High Frequency Preheating Machine Co., Ltd. was founded in Taiwan in 1981 and specializes in high-frequency industrial equipment design and manufacturing.'
        ),
        localized(
          '公司持續開發創新，並由英國、日本引進先進技術；舊站資料也提及曾由日本授權承包設備，以加工技術取得日本公司的認可。',
          'The company has continued development and innovation while introducing advanced technology from the United Kingdom and Japan; legacy data also notes Japan-authorized equipment contracting and technical recognition.'
        ),
        localized(
          '賀民致力研究防止高週波外洩以提高工作品質，並在泰國與馬來西亞設有服務據點，銷售地區延伸至亞洲、日本、中東、美洲與非洲。',
          'HFM has focused on reducing RF leakage to improve work quality, with service locations in Thailand and Malaysia and sales across Asia, Japan, the Middle East, the Americas and Africa.'
        )
      ]
    },
    business: {
      title: localized('營業項目', 'Services'),
      intro: localized('除了標準機型之外，可依客戶需求訂製特殊專用機型，以及整廠設備承包。', 'Beyond standard machines, HFM can build custom dedicated systems and provide turnkey equipment contracting.'),
      items: [
        localized('高週波旋盤式泡殼密著包裝機', 'H.F. rotary plate blister package sealing machine'),
        localized('高週波塑膠熔接機', 'High frequency plastic welding machine'),
        localized('高週波圓盤式塑膠熔接機', 'High frequency rotary plate plastic welding machine'),
        localized('高週波腳踏式塑膠熔接機', 'High frequency foot pedal plastic welding machine'),
        localized('高週波帆布、洋傘熔接專用機', 'High frequency canvas and umbrella bonding machine'),
        localized('高週波自動帆布熔接機', 'High frequency auto canvas bonding machine'),
        localized('高週波自動送料塑膠熔接機', 'High frequency auto feeding welding machine'),
        localized('高週波 PET 熔斷專用機', 'High frequency PET cutting machine'),
        localized('高週波同時熔斷機', 'High frequency simultaneous welding and cutting machine'),
        localized('高週波乾燥機 / 高週波纖維乾燥機', 'High frequency drying and fiber drying machines'),
        localized('金屬網、螺絲埋植機', 'Metallic net and screws planting machine'),
        localized('金屬熱處理機 / 鋼管熔接機', 'Metal heat treatment and steel pipe making machine'),
        localized('滾輪式自動熱貼合機 / 自動織帶貼合機', 'Auto-rolling and lutestring heat paste bonding machine'),
        localized('企眼機 / 包邊機', 'Eyelet machine and edge binding machine')
      ]
    },
    customers: {
      title: localized('代表客戶', 'Representative Clients'),
      intro: localized('舊站登載之主要代表客戶如下，實際名單仍可持續更新。', 'Representative clients listed on the legacy site are shown below; the actual list can continue to grow.'),
      items: [
        localized('力翔纖維股份有限公司', 'Jordan Amer AL Naouri & Sons Company'),
        localized('士林電機股份有限公司', 'Shepherd Shine Enterprises Pvt Ltd'),
        localized('友旺科技股份有限公司', 'Top Star Group'),
        localized('台群纖維股份有限公司', 'Shepherd Group'),
        localized('台灣百和工業股份有限公司', 'Graphics One'),
        localized('3M 台灣', 'Precious Alloys'),
        localized('威剛科技股份有限公司', 'Maha Energy Corporation'),
        localized('十銓科技股份有限公司', 'Equipment and Technology JSC ETECH'),
        localized('遠東金士頓科技股份有限公司', 'Ongoing client expansion'),
        localized('振燿科技股份有限公司', 'Domestic and overseas manufacturers'),
        localized('德林股份有限公司', 'Industrial production clients'),
        localized('睿澤企業股份有限公司', 'High-frequency equipment buyers'),
        localized('山水彩色印刷股份有限公司', 'Packaging and printing clients'),
        localized('萬國科技股份有限公司', 'Technology manufacturers'),
        localized('百樂電池股份有限公司', 'Battery industry clients'),
        localized('華夏海灣塑膠股份有限公司', 'Plastic industry clients'),
        localized('雃博股份有限公司', 'Medical device industry clients'),
        localized('聯璟實業有限公司', 'Manufacturing industry clients'),
        localized('賽天使亞太有限公司', 'Asia-Pacific customers'),
        localized('群聯電子股份有限公司竹南分公司', 'Electronics industry clients')
      ]
    }
  }
}

export class MillionAsia {
  constructor(locale = 'zh') {
    this.locale = locale === 'en' ? 'en' : 'zh'
  }

  t(value) {
    if (!value || typeof value !== 'object') return value
    return value[this.locale] || value.zh || value.en || ''
  }

  localize(item) {
    if (Array.isArray(item)) return item.map((entry) => this.localize(entry))
    if (!item || typeof item !== 'object') return item
    if ('zh' in item && 'en' in item && Object.keys(item).every((key) => key === 'zh' || key === 'en')) {
      return this.t(item)
    }

    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => {
        if (value && typeof value === 'object' && 'zh' in value && 'en' in value) {
          return [key, this.t(value)]
        }

        return [key, this.localize(value)]
      })
    )
  }

  get site() {
    return this.localize(raw.site)
  }

  get navigation() {
    return this.localize(raw.navigation)
  }

  get highlights() {
    return this.localize(raw.highlights)
  }

  get productCategories() {
    return this.localize(raw.productCategories)
  }

  get products() {
    return this.localize(raw.products)
  }

  get applications() {
    return this.localize(raw.applications)
  }

  get process() {
    return this.localize(raw.process)
  }

  get about() {
    return this.localize(raw.about)
  }

  getProduct(slug) {
    return this.products.find((product) => product.slug === slug)
  }

  getCategory(slug) {
    return this.productCategories.find((category) => category.slug === slug)
  }

  getProductsByCategory(categorySlug) {
    return this.products.filter((product) => product.category === categorySlug)
  }

  get sitemap() {
    return [
      {
        title: this.t(localized('主要頁面', 'Primary Pages')),
        links: this.navigation.filter((link) => link.to !== '/products')
      },
      {
        title: this.t(localized('產品分類', 'Product Categories')),
        links: this.productCategories.map((category) => ({
          label: category.name,
          to: `/products#${category.slug}`
        }))
      },
      {
        title: this.t(localized('SEO 與服務', 'SEO and Service')),
        links: [
          { label: this.t(localized('網站地圖', 'Sitemap')), to: '/sitemap' },
          { label: this.t(localized('聯絡資訊', 'Contact Information')), to: '/contact#inquiry' }
        ]
      }
    ]
  }
}

export const createMillionAsia = (locale) => new MillionAsia(locale)
