import { Grid, Card, CardMedia, CardContent, Typography, Box, Divider } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ProductItem } from "modules/catalog/types";

const PicForCarousel = (isSmall?: boolean) => {
  const randomNum = Math.floor(Math.random() * 1000);
  const width = isSmall ? 500 : 2000;
  const height = isSmall ? 300 : 400;
  return `https://picsum.photos/seed/${randomNum}/${width}/${height}`;
};

const products: ProductItem[] = [
  {
    name: "Camiseta básica",
    description: "Camiseta de algodón suave y cómoda.",
    price: 19.99,
    image: PicForCarousel(true),
  },
  {
    name: "Pantalones vaqueros",
    description: "Pantalones vaqueros ajustados de estilo moderno.",
    price: 49.99,
    image: PicForCarousel(true),
  },
  {
    name: "Vestido floral",
    description: "Vestido elegante con estampado floral.",
    price: 39.99,
    image: PicForCarousel(true),
  },
  {
    name: "Chaqueta de cuero",
    description: "Chaqueta de cuero genuino con cierre de cremallera.",
    price: 89.99,
    image: PicForCarousel(true),
  },
  {
    name: "Blusa de encaje",
    description: "Blusa delicada con detalles de encaje.",
    price: 29.99,
    image: PicForCarousel(true),
  },
  {
    name: "Shorts de mezclilla",
    description: "Shorts cortos de mezclilla con efecto desgastado.",
    price: 34.99,
    image: PicForCarousel(true),
  },
  {
    name: "Traje de baño tropical",
    description: "Traje de baño de dos piezas con estampado tropical.",
    price: 42.99,
    image: PicForCarousel(true),
  },
  {
    name: "Zapatos de tacón elegantes",
    description: "Zapatos de tacón alto para ocasiones especiales.",
    price: 59.99,
    image: PicForCarousel(true),
  },
  {
    name: "Jersey de punto",
    description: "Jersey cálido de punto para el invierno.",
    price: 45.99,
    image: PicForCarousel(true),
  },
  {
    name: "Jeans desgastados",
    description: "Jeans con efecto desgastado y rodillas rasgadas.",
    price: 39.99,
    image: PicForCarousel(true),
  },
  {
    name: "Camiseta básica",
    description: "Camiseta de algodón suave y cómoda.",
    price: 19.99,
    image: PicForCarousel(true),
  },
  {
    name: "Pantalones vaqueros",
    description: "Pantalones vaqueros ajustados de estilo moderno.",
    price: 49.99,
    image: PicForCarousel(true),
  },
  {
    name: "Vestido floral",
    description: "Vestido elegante con estampado floral.",
    price: 39.99,
    image: PicForCarousel(true),
  },
  {
    name: "Chaqueta de cuero",
    description: "Chaqueta de cuero genuino con cierre de cremallera.",
    price: 89.99,
    image: PicForCarousel(true),
  },
];

export const CatalogPage: React.FC = () => {
  return (
    <Box maxWidth={"xl"} margin="0 auto" mt={3} px={5} boxSizing="border-box">
      <Typography variant="h4" align="left" color="text.secondary" sx={{ mr: 1 }}>
        Bienvenido a nuestra tienda de ropa
      </Typography>
      <Typography variant="h6" align="left" color="text.secondary" sx={{ mb: 2, mr: 1 }}>
        Aquí encontrarás todo lo que necesitas
      </Typography>
      <Carousel>
        <img src={PicForCarousel()} alt="1" />
        <img src={PicForCarousel()} alt="2" />
        <img src={PicForCarousel()} alt="3" />
      </Carousel>

      <Typography variant="h5" align="left" color="text.secondary" sx={{ mb: 2, mr: 1, mt: 5 }}>
        Nuestros productos
      </Typography>
      <Divider />
      <Grid container spacing={2} my={4} rowGap={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.name} >
            <Card sx={{ maxWidth: 370, margin: "0 auto" }}>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Typography variant="h6" align="right" color="text.secondary" sx={{ mb: 1, mr: 1 }}>
                ${product.price}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
