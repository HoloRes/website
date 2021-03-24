import {
    Box,
    Layer,
    Text,
  } from 'grommet';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminUserInfo() {
  let artistName = "Artist 0"
  let artistId = 0
  let artistEmail = "artist0@gmail.com"
  let artistTwitter = "@Artist0"

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



