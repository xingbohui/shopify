import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu } from "@shopify/app-bridge-react";
// import Routes from "./Routes";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import FiltersWithChildrenContentAndUnsavedChangesExample from "./pages/customer";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            {/* <NavigationMenu
              navigationLinks={[
                {
                  // label: t("NavigationMenu.pageName"),
                  label: "Point programs",
                  destination: "/point",
                },
                {
                  // label: t("NavigationMenu.pageName"),
                  label: "Customer data",
                  destination: "/customer",
                },
                {
                  // label: t("NavigationMenu.pageName"),
                  label: "order data",
                  destination: "/order",
                },
              ]}
            /> */}
            {/* <Routes pages={pages} /> */}
            <Routes>
              <Route
                path="/home"
                element={<FiltersWithChildrenContentAndUnsavedChangesExample />}
              />
            </Routes>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
