import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { HeaderBackButton, HeaderTitle } from "~/components/header";
import { TRPCProvider } from "~/utils/api";
import { supabase } from "~/utils/supabase";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <TRPCProvider>
        <SafeAreaProvider>
          {/*
           * The Stack component displays the current page.
           * It also allows you to configure your screens
           */}
          <Stack
            screenOptions={{
              headerLeft: HeaderBackButton,
              headerTitle: HeaderTitle,
              headerStyle: {
                backgroundColor: "#18181A",
              },
            }}
          >
            {/*
             * Present the profile screen as a modal
             * @see https://expo.github.io/router/docs/guides/modals
             */}
            <Stack.Screen
              name="profile"
              options={{
                presentation: "modal",
                headerTitle: () => <></>,
              }}
            />
          </Stack>
          <StatusBar />
        </SafeAreaProvider>
      </TRPCProvider>
    </SessionContextProvider>
  );
}
