import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { HOT_URL,COLD_URL, RAIN_URL } from '../constants/constant';


export default function InfoBox({Info}){
    return(
      <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345, height:450}}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          Info.humidity > 80 
          ? RAIN_URL
          :Info.temp > 20
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           <p><b>{Info.city}</b>{
            Info.humidity > 80 
            ? <ThunderstormIcon/>
            :Info.temp > 15 
            ? <WbSunnyIcon/>
            : <AcUnitIcon/>
           }</p> 
        </Typography>
        <Typography variant="body2" color="text.secondary"  component="span">
          <p>Temperature: {Info.temp}&deg;C</p>
          <p>Humidity: {Info.humidity}</p>
          <p>Min Temperature: {Info.tempMin}&deg;C</p>
          <p>Max Temperature: {Info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{Info.weather}</i> and Feels like: {Info.feels_Like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}