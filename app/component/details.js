import React, { useContext, useEffect } from "react";
import {  Text,  VStack, Center,Image } from "native-base";
import { context } from "../context/context";
import {  getUserDetails } from "../actions";

const Details = (props) => {
  console.log(props);
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const handleActionPromise = async () => {
      dispatch(await getUserDetails(props.route.params.id));
    };
    handleActionPromise();
  }, []);
  if (state.users.details && state.users.details.id)
    return (
      <VStack >
        <Center>
          <Text
            fontSize={20}
            color="grey"
            borderBottomColor="black"
            borderBottomWidth={2}
          >
            Details of {state.users.details.name}
          </Text>
        </Center>
        <Image source={{uri:'https://picsum.photos/200'}} style={{marginHorizontal:50,marginVertical:10,width:300,height:200}} alt="img"/>
        <Text>Email: {state.users.details.email}</Text>
        <Text>Phone: {state.users.details.phone}</Text>
        <Text>Website: {state.users.details.website}</Text>
          <Text fontWeight="bold">Bio:</Text>
        <Text>
          Stet invidunt dolor amet et est dolore, sed sed tempor diam et.
          Gubergren gubergren et ipsum dolor dolore accusam sanctus, diam ut
          dolor amet stet diam labore. Elitr duo kasd vero est, elitr sed amet
          eos tempor justo, sadipscing takimata et diam sed dolor lorem, sit no
          sit invidunt amet.
        </Text>
      </VStack>
    );
  return <Text>No Details</Text>;
};
export default Details;
