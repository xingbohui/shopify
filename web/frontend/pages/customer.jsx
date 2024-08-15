import { Card, EmptyState,Button, Page, LegacyCard } from "@shopify/polaris";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { notFoundImage } from "../assets";

export default function Customer() {
  const { t } = useTranslation();
  const shopify = useAppBridge();

  const handlePrimaryAction = () => {
    // Perform actions when the primary button is clicked
    shopify.modal.show("social-media-modal");
  };

  const generateBlogPost = () => {
    shopify.toast.show("Blog post template generated");
  };

  return (
    <Page>
      <LegacyCard></LegacyCard>
      <Button class="Polaris-Button" onClick={() => alert('Button clicked!')}>Example button</Button>

    </Page>
  );
}
