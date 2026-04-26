const designSystems = [
  {
    id: "material",
    name: "Material Design",
    org: "Google",
    tech: "Web / Android / iOS",
    description:
      "Comprehensive design system with component guidance, motion, and adaptable theming.",
    url: "https://m3.material.io/",
    components: ["Button", "Card", "Dialog", "Navigation Bar", "Text Field"],
    tokens: ["#6750A4", "#386A20", "#1D192B", "#FFB4AB", "#7D5260"]
  },
  {
    id: "carbon",
    name: "Carbon",
    org: "IBM",
    tech: "React / Vanilla",
    description:
      "Enterprise-ready system focused on accessibility, data-dense UI, and consistency.",
    url: "https://carbondesignsystem.com/",
    components: ["Data Table", "Accordion", "Modal", "Side Nav", "Tag"],
    tokens: ["#0F62FE", "#161616", "#393939", "#6F6F6F", "#F4F4F4"]
  },
  {
    id: "ant",
    name: "Ant Design",
    org: "Ant Group",
    tech: "React",
    description:
      "A polished component library with robust patterns for dashboards and business apps.",
    url: "https://ant.design/",
    components: ["Form", "Table", "Drawer", "Date Picker", "Notification"],
    tokens: ["#1677FF", "#0958D9", "#F0F5FF", "#262626", "#52C41A"]
  },
  {
    id: "chakra",
    name: "Chakra UI",
    org: "Chakra Systems",
    tech: "React",
    description:
      "Composable, theme-first components with strong defaults for accessibility.",
    url: "https://chakra-ui.com/",
    components: ["Popover", "Menu", "Tabs", "Toast", "Input"],
    tokens: ["#805AD5", "#2D3748", "#38B2AC", "#F7FAFC", "#ED64A6"]
  },
  {
    id: "polaris",
    name: "Polaris",
    org: "Shopify",
    tech: "Web",
    description:
      "System for commerce workflows with practical guidance for product and content design.",
    url: "https://polaris.shopify.com/",
    components: ["Banner", "Empty State", "Filters", "Resource List", "Badge"],
    tokens: ["#008060", "#212B36", "#F6F6F7", "#BF0711", "#5C6AC4"]
  }
];

const select = document.getElementById("systemSelect");
const nameEl = document.getElementById("systemName");
const descriptionEl = document.getElementById("systemDescription");
const orgEl = document.getElementById("systemOrg");
const techEl = document.getElementById("systemTech");
const linkEl = document.getElementById("systemLink");
const componentsListEl = document.getElementById("componentsList");
const swatchesEl = document.getElementById("tokenSwatches");

function renderSystem(system) {
  nameEl.textContent = system.name;
  descriptionEl.textContent = system.description;
  orgEl.textContent = system.org;
  techEl.textContent = system.tech;
  linkEl.href = system.url;
  linkEl.textContent = system.url;

  componentsListEl.innerHTML = "";
  system.components.forEach((component) => {
    const item = document.createElement("li");
    item.textContent = component;
    componentsListEl.appendChild(item);
  });

  swatchesEl.innerHTML = "";
  system.tokens.forEach((color) => {
    const card = document.createElement("div");
    card.className = "swatch";

    const colorBlock = document.createElement("div");
    colorBlock.className = "swatch-color";
    colorBlock.style.background = color;

    const label = document.createElement("div");
    label.className = "swatch-label";
    label.textContent = color;

    card.appendChild(colorBlock);
    card.appendChild(label);
    swatchesEl.appendChild(card);
  });
}

function initialize() {
  designSystems.forEach((system) => {
    const option = document.createElement("option");
    option.value = system.id;
    option.textContent = `${system.name} (${system.org})`;
    select.appendChild(option);
  });

  select.addEventListener("change", (event) => {
    const selected = designSystems.find((system) => system.id === event.target.value);
    if (selected) {
      renderSystem(selected);
    }
  });

  renderSystem(designSystems[0]);
}

initialize();
