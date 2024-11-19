import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from "../../layout";
import Section from "../../components/Section";
import ProductGrid from "../../components/ProductGrid";

const FilterContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const FilterTitle = styled("h3")(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: theme.palette.grey[900],
  marginBottom: theme.spacing(1.5),
}));

const FilterOptionsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const FilterLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const FilterInput = styled("input")(({ theme }) => ({
  width: 16,
  height: 16,
  marginRight: theme.spacing(1),
  color: theme.palette.primary.main,
  borderColor: theme.palette.grey[300],
  "&:checked": {
    accentColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  "&:focus": {
    outline: "none",
    ring: `2px solid ${theme.palette.primary.main}`,
  },
}));

const FilterText = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.grey[600],
}));

const SortingContainer = styled(Box)(({ theme }) => ({
  height: 60,
  marginBottom: theme.spacing(3),
}));

const SortingLabel = styled("label")(({ theme }) => ({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: theme.palette.grey[900],
  marginBottom: theme.spacing(1),
}));

const SortingSelect = styled("select")(({ theme }) => ({
  width: "100%",
  height: 40,
  padding: "0 12px",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.grey[600],
  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
    ring: `2px solid ${theme.palette.primary.main}`,
  },
}));

const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
  return (
    <FilterContainer>
      <FilterTitle>{title}</FilterTitle>
      <FilterOptionsContainer>
        {options.map((option, index) => (
          <FilterLabel key={index}>
            <FilterInput
              type={inputType}
              value={option.value || option.text}
              name={inputType === "radio" ? title.toLowerCase() : undefined}
            />
            <FilterText>{option.text}</FilterText>
          </FilterLabel>
        ))}
      </FilterOptionsContainer>
    </FilterContainer>
  );
};

const ProductListingPage = () => {
  const [sortBy, setSortBy] = useState("");
  const [products] = useState([
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-4.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-1.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-2.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-3.jpeg",
      price: 200,
      priceDiscount: 100,
    },
    {
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      image: "/produc-image-4.jpeg",
      price: 200,
      priceDiscount: 100,
    },
  ]);

  return (
    <Layout>
      <Box sx={{ display: "flex", gap: 4, p: 3 }}>
        {/* Sidebar com filtros */}
        <Box sx={{ width: 308, flexShrink: 0 }}>
          {/* Ordenação */}
          <SortingContainer>
            <SortingLabel>Ordenar por</SortingLabel>
            <SortingSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </SortingSelect>
          </SortingContainer>

          {/* Filtros */}
          <Box sx={{ bgcolor: "white", p: 4, borderRadius: 1, boxShadow: 1 }}>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Filtrar por
            </h2>
            <hr className="border-gray-200 mb-6" />

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Adiddas", value: "adiddas" },
                { text: "Calenciaga", value: "calenciaga" },
                { text: "K-Swiss", value: "k-swiss" },
                { text: "Nike", value: "nike" },
                { text: "Puma", value: "puma" },
              ]}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte e lazer", value: "sport" },
                { text: "Casual", value: "casual" },
                { text: "Utilitário", value: "utility" },
                { text: "Corrida", value: "running" },
              ]}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "male" },
                { text: "Feminino", value: "female" },
                { text: "Unisex", value: "unisex" },
              ]}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: "Novo", value: "new" },
                { text: "Usado", value: "used" },
              ]}
            />
          </Box>
        </Box>

        {/* Lista de produtos */}
        <Box sx={{ flexGrow: 1 }}>
          <Section
            title={`Resultados para "Tênis" - ${products.length} produtos`}
            titleAlign="left"
          >
            <ProductGrid products={products} />
          </Section>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductListingPage;
