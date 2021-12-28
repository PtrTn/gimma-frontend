import React, { FC, memo } from "react";
import { Container } from "../Theme/Container";
import { LobbyForm } from "./LobbyForm";

export const HomeScreen: FC = memo(() => {
  return (
    <Container>
      <div className="self-center p-14 bg-white w-md mx-auto rounded-xl shadow-xl overflow-hidden p-6 space-y-10">
        <LobbyForm />
      </div>
    </Container>
  );
});
