import { Card, EmptyState, Page } from "@shopify/polaris";
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
      <button onClick={() => modalRef.current?.show()}>
        Expand Your Reach
      </button>
      <TitleBar title="标题"></TitleBar>
      <button variant="primary" onClick={handlePrimaryAction}>
        点击
      </button>
      <button onClick={generateBlogPost}>Generate Blog Post</button>
    </Page>
  );
}
