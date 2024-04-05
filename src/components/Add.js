import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  LocationOnRounded,
  PermMediaRounded,
  PersonAdd,
} from "@mui/icons-material";
import { useState } from "react";

export default function Add() {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "5px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title={"Add"}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "45%", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={430}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={4}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create post
          </Typography>
          <UserBox>
            <Avatar src="/images/saadh.jpeg" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              Mohamed Sa Aadhath
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind..."
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={1} mb={2}>
            <IconButton aria-label="emojie">
              <EmojiEmotions color="warning" />
            </IconButton>
            <IconButton aria-label="emojie">
              <PermMediaRounded color="success" />
            </IconButton>
            <IconButton aria-label="emojie">
              <PersonAdd color="primary" />
            </IconButton>
            <IconButton aria-label="emojie">
              <LocationOnRounded color="error" />
            </IconButton>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button sx={{ bgcolor: "#0866ff" }}>Post</Button>
            <Button sx={{ width: "100px", bgcolor: "darkcyan" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
