import React from "react";
import { Box, Container, Typography, Paper, Divider } from "@mui/material";

const PrivacyPolicy = () => {
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
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mb: 2, color: "red" }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            Last Updated: October 2023
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            This Privacy Policy describes how <b>DayCatch</b>, operated by{" "}
            <b>VN AQUA RAS PRIVATE LIMITED</b>, collects, uses, and protects
            your personal information when you use our website and mobile
            application. By using our services, you agree to the collection and
            use of information in accordance with this policy.
          </Typography>

          {/* 1 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            1. Information We Collect
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            We may collect personal information that you voluntarily provide
            when using the DayCatch platform, including:
            <br />
            <br />
            • Name and contact details (phone number, email address) <br />
            • Delivery address <br />
            • Account login details <br />
            • Order history and purchase information <br />
            • Device and usage data when accessing our website or app
          </Typography>

          {/* 2 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            2. How We Use Your Information
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            We use your information to operate and improve our services,
            including:
            <br />
            <br />
            • Creating and managing user accounts <br />
            • Processing seafood orders and deliveries <br />
            • Providing customer support <br />
            • Sending order updates and notifications <br />
            • Improving our website, services, and customer experience
          </Typography>

          {/* 3 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            3. Sharing of Information
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            We do not sell your personal information. However, we may share your
            data with:
            <br />
            <br />
            • Delivery partners to fulfill seafood orders <br />
            • Payment service providers for secure transactions <br />
            • Legal authorities if required by law
          </Typography>

          {/* 4 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            4. Data Security
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            We implement appropriate technical and organizational security
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction.
          </Typography>

          {/* 5 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            5. Cookies and Tracking Technologies
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            Our website may use cookies and similar technologies to improve
            user experience, analyze traffic, and personalize content. You can
            control cookie settings through your browser.
          </Typography>

          {/* 6 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            6. User Rights
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            You have the right to access, update, or request deletion of your
            personal information stored on our platform. If you wish to update
            or remove your information, please contact us using the details
            below.
          </Typography>

          {/* 7 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            7. Changes to This Privacy Policy
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
          >
            We may update this Privacy Policy from time to time. Any updates
            will be posted on this page with the revised "Last Updated" date.
          </Typography>

          {/* 8 */}
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            8. Contact Us
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            If you have any questions about this Privacy Policy, please contact:
            <br />
            <br />
            <b>VN AQUA RAS PRIVATE LIMITED</b>
            <br />
            H NO: 249, BDL Housing Society, MAC Society
            <br />
            Near ESI, Ramachandrapuram
            <br />
            Medak – 502032
            <br />
            Telangana, India
            <br />
            Customer Support: <b>+91 9866889788</b>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;