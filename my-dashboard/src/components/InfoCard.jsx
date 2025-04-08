import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// InfoCard.jsx
// This component displays a card with a title and a value
// It uses Material-UI's Card component for styling

function InfoCard({ title, value }) {
    return (
        <Card sx={{ minWidth: 150, margin: 1 }}>
            <CardContent>
                <Typography color="textSecondary">{title}</Typography>
                <Typography variant="h5">{value}</Typography>
            </CardContent>
        </Card>
    );
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InfoCard;