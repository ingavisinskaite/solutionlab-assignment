import React from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteCoffeeDialog from "../delete-coffee-dialog";
import EditIcon from "@material-ui/icons/Edit";
import EditCoffeeDialog from "../edit-coffee-dialog";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  media: {
    height: "70px",
    paddingTop: "56.25%" // 16:9
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  }
});

const CoffeeCard = props => {
  const classes = useStyles();

  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const formatPrice = price => {
    let formattedPrice = `${price.toFixed(2)}€`;
    return formattedPrice;
  };

  return (
    <Card className={`${classes.card} coffee-card`}>
      <CardMedia
        className={`${classes.media} coffee-img`}
        image={props.imgUrl}
        title={props.title}
      />
      <CardActions>
        <DeleteIcon className="delete" onClick={handleClickOpenDelete} />
        <EditIcon className="edit" onClick={handleClickOpenEdit} />
      </CardActions>
      <CardContent className="container">
        <DeleteCoffeeDialog
          isOpen={openDelete}
          handleClose={handleCloseDelete}
          coffeeTitle={props.title}
        />
        <EditCoffeeDialog
          isOpen={openEdit}
          handleClose={handleCloseEdit}
          coffeeTitle={props.title}
          coffeeImg={props.imgUrl}
          coffeePrice={props.price}
        />
        <Typography className={`${classes.pos} title`} color="textSecondary">
          {props.title}
        </Typography>
        <Typography className="price" variant="body2" component="p">
          {formatPrice(props.price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
