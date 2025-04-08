import { Card, CardContent, Typography } from '@mui/material';

function InfoCard({ title, value}) {
    return (
        <Card sx={{ minWidth: 150, margin: 1 }}>
            <CardContent>
                <Typography color="textSecondary">{title}</Typography>
                <Typography variant="h5">{value}</Typography>
            </CardContent>
        </Card>
    );
}

export default InfoCard;