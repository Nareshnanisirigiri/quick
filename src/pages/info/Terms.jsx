import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";

const Terms = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#F8F9FA", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: "red" }}>
            Terms & Conditions
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: October 2023
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            These Terms and Conditions govern your use of the <b>DayCatch</b> website and mobile
            application operated by <b>VN AQUA RAS PRIVATE LIMITED</b>. By accessing or using our
            platform, you agree to comply with and be bound by these terms.
          </Typography>

          {/* 1 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            1. Agreement to Terms
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            These Terms of Use constitute a legally binding agreement between you (“User”, “you”)
            and <b>VN AQUA RAS PRIVATE LIMITED</b> ("Company", "we", "our", or "us"), concerning
            your access to and use of the <b>DayCatch website, mobile application, and services</b>,
            including the purchase and delivery of fresh seafood products.
          </Typography>

          {/* 2 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            2. Company Information
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            <b>VN AQUA RAS PRIVATE LIMITED</b> <br />
            H NO: 249, BDL Housing Society, MAC Society <br />
            Near ESI, Ramachandrapuram <br />
            Medak – 502032 <br />
            Telangana, India <br />
            Customer Support: <b>+91 9866889788</b>
          </Typography>

          {/* 3 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            3. Intellectual Property Rights
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Unless otherwise indicated, the website, application, and all related content including
            source code, databases, functionality, software, website design, images, product
            listings, logos, and trademarks are the exclusive property of
            <b> VN AQUA RAS PRIVATE LIMITED</b>.
          </Typography>

          {/* 4 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            4. User Accounts and Registration
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            To place orders through DayCatch, users may be required to create an account. By
            registering, you agree that the information provided is accurate and complete, you will
            maintain the confidentiality of your login credentials, and you are responsible for all
            activities conducted through your account.
          </Typography>

          {/* 5 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            5. Product Information
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            DayCatch specializes in <b>fresh seafood and fish products</b> sourced from trusted
            suppliers. While we strive to provide accurate product descriptions, availability,
            weight, and images, actual products may vary slightly due to the nature of fresh
            seafood.
          </Typography>

          {/* 6 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            6. Orders and Payments
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            All orders are subject to availability and confirmation. Prices displayed on the
            platform may change without notice. Payment must be completed before order confirmation
            unless Cash on Delivery (COD) is available.
          </Typography>

          {/* 7 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            7. Delivery Policy
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            DayCatch delivers fresh seafood to selected service locations. Delivery timelines may
            vary depending on location, demand, or external conditions such as weather or transport
            disruptions.
          </Typography>

          {/* 8 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            8. Cancellation and Refund Policy
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Orders may be cancelled before dispatch. Due to the <b>perishable nature of seafood</b>,
            refunds may not be available once the product has been processed or dispatched.
          </Typography>

          {/* 9 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            9. Prohibited Activities
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            Users agree not to misuse the platform, attempt to hack or damage the website, provide
            false information, or use automated systems to extract platform data.
          </Typography>

          {/* 10 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            10. Modifications to the Service
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            We reserve the right to change, modify, suspend, or discontinue any part of the website
            or application at any time without prior notice.
          </Typography>

          {/* 11 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            11. Limitation of Liability
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            To the fullest extent permitted by law, <b>VN AQUA RAS PRIVATE LIMITED</b> shall not be
            liable for any indirect or consequential damages resulting from the use of our
            services.
          </Typography>

          {/* 12 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            12. Governing Law
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
            These Terms shall be governed by the laws of <b>India</b>. Any disputes will fall under
            the jurisdiction of courts in <b>Telangana, India</b>.
          </Typography>

          {/* 13 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            13. Contact Information
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
            <b>VN AQUA RAS PRIVATE LIMITED</b> <br />
            H NO: 249, BDL Housing Society, MAC Society <br />
            Near ESI, Ramachandrapuram <br />
            Medak – 502032, Telangana, India <br />
            Customer Support: <b>+91 9866889788</b>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Terms;