
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: "40px auto",
  maxWidth: 500,
  backgroundColor: theme.palette.background.paper,
  color: "#3E2723",
}));

const AvatarContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
  position: "relative",
});

const AvatarInput = styled("input")({
  display: "none",
});

const AvatarOverlay = styled("div")({
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#3E2723",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
});

const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

export default function Profile({ username, mob }) {
  const initialData = {
    phone: mob,
    name: username,
    district: "औरंगाबाद",
    state: "बिहार",
    skill: "",
    dihari: ""
  };

  const [userData, setUserData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // Store profile image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  async function saveChanges() {
    toggleEditMode();

    try {
      const response = await fetch("https://backend-tkha.onrender.com/api/users/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: userData.phone,
          District: userData.district,
          state: userData.state,
          skills: userData.skill,
          Dihari: userData.dihari,
          Name: userData.name,
          profilepic: profileImage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("ye rhaa data", data);
      }
    } catch (error) {
      console.log(error.message);
    }


  

   console.log(userData)

   // console.log(profileImage)


  }

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer elevation={3}>
      <AvatarContainer>
        <Avatar sx={{ width: 100, height: 100, backgroundColor: "#3E2723" }} src={profileImage}>
          {!profileImage && <PersonIcon sx={{ fontSize: 60, color: "#FFEB3B" }} />}
        </Avatar>
        <label htmlFor="avatar-upload">
          <AvatarInput
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <AvatarOverlay>
            <EditIcon sx={{ color: "#FFEB3B", fontSize: 20 }} />
          </AvatarOverlay>
        </label>
      </AvatarContainer>

      <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
        {username}
      </Typography>

      {editMode ? (
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="मोबाइल नंबर"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="जिला"
                name="district"
                value={userData.district}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="राज्य"
                name="state"
                value={userData.state}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>कौशल</InputLabel>
                <Select
                  label="कौशल"
                  name="skill"
                  value={userData.skill}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "कौशल" }}
                >
                  <MenuItem value="राजमिश्री">राजमिश्री</MenuItem>
                  <MenuItem value="प्लंबर">प्लंबर</MenuItem>
                  <MenuItem value="इलेक्ट्रिशियन">इलेक्ट्रिशियन</MenuItem>
                  <MenuItem value="बधाई">बधाई</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="दिहाड़ी"
                name="dihari"
                value={userData.dihari}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{ mt: 2, width: "100%", backgroundColor: "#FF5722", color: "#FFF" }}
            onClick={saveChanges}
          >
            प्रोफ़ाइल सहेजें
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" align="center" sx={{ color: "#5D4037" }}>
            <strong>मोबाइल:</strong> {userData.phone}
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: "#5D4037", marginTop: "10px" }}>
            <strong>जिला:</strong> {userData.district}
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: "#5D4037", marginTop: "10px" }}>
            <strong>राज्य:</strong> {userData.state}
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: "#5D4037", marginTop: "10px" }}>
            <strong>कौशल:</strong> {userData.skill || "नहीं चुना गया"}
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: "#5D4037", marginTop: "10px" }}>
            <strong>दिहाड़ी:</strong> {userData.dihari || "नहीं भरी गई"}
          </Typography>
        </Box>
      )}

      <Divider sx={{ margin: "20px 0" }} />

      <ButtonContainer>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{ width: "100%", backgroundColor: "#3E2723", color: "#FFEB3B" }}
          onClick={toggleEditMode}
        >
          {editMode ? "रद्द करें" : "प्रोफ़ाइल संपादित करें"}
        </Button>
      </ButtonContainer>
    </ProfileContainer>
  );
}









