import {
    Box,
    Layer,
    Text,
  } from 'grommet';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminUserInfo({ setShow }) {

  const artistName = "Artist 0"
  const artistId = 0
  const artistEmail = "artist0@gmail.com"
  const artistTwitter = "@Artist0"

  return(
    <Layer 
      onEsc={() => setShow(false)}
      onClickOutside={() => setShow(false)}
    >
      <Box>
        <Text>Artist Name: {artistName}</Text>
        <Text>Id: {artistId}</Text>
        <Text>Email: {artistEmail}</Text>
        <Text>Twitter: {artistTwitter}</Text>
      </Box>
    </Layer>
  );

}



