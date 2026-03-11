import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useCart } from '../../context/CartContext';

const FoodCard = ({ id, image, name, price, description }) => {
  const { addToCart } = useCart();
  
  return (
    <Card 
      sx={{ 
        borderRadius: 4, 
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(255, 42, 35, 0.15)',
        }
      }}
    >
      <Link to={`/food/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="180"
          image={image || 'https://via.placeholder.com/300x180'}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
      </Link>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Link to={`/food/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, '&:hover': { color: 'primary.main' } }}>
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
            ${price.toFixed(2)}
          </Typography>
          <IconButton 
            color="primary" 
            onClick={() => addToCart({ id, image, name, price, description })}
            sx={{ 
              bgcolor: 'action.hover', 
              '&:hover': { bgcolor: 'primary.main', color: 'white' } 
            }}
          >
            <Add />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
