/**
=========================================================
* ChatBot Page
=========================================================
* LLM Chat Interface
*/

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

// @mui icons
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/base/MKBox";
import MKTypography from "components/base/MKTypography";
import MKButton from "components/base/MKButton";
import MKAvatar from "components/base/MKAvatar";
import MKSnackbar from "components/base/MKSnackbar";

// Shared hooks
import { useSnackbar } from "shared/hooks";

// Features
import { useChatBot } from "features/chatbot";

function ChatBot() {
  const [inputMessage, setInputMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);

  const { messages, sendMessage, loading, clearMessages } = useChatBot();
  const { snackbar, showSnackbar, closeSnackbar } = useSnackbar();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        showSnackbar(
          "error",
          "error",
          "File Too Large",
          `${file.name} is too large. Maximum size is 10MB.`
        );
        return false;
      }
      return true;
    });

    setAttachedFiles((prev) => [...prev, ...validFiles]);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveFile = (index) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if (!inputMessage.trim() && attachedFiles.length === 0) {
      showSnackbar(
        "warning",
        "warning",
        "Empty Message",
        "Please enter a message or attach a file before sending."
      );
      return;
    }

    try {
      await sendMessage(inputMessage, attachedFiles);
      setInputMessage("");
      setAttachedFiles([]);
      inputRef.current?.focus();
    } catch (error) {
      showSnackbar("error", "error", "Error", "Failed to send message. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Container>
      <MKBox mb={6}>
        <MKBox display="flex" alignItems="center" gap={2} mb={2}>
          <MKAvatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: "primary.main",
            }}
          >
            <SmartToyIcon />
          </MKAvatar>
          <MKBox>
            <MKTypography variant="h4" fontWeight="bold">
              AI Chat Assistant
            </MKTypography>
            <MKTypography variant="body2" color="text" sx={{ opacity: 0.7 }}>
              Chat with an AI assistant powered by LLM
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>

      <Card sx={{ height: "calc(100vh - 280px)", display: "flex", flexDirection: "column" }}>
        {/* Messages Area */}
        <MKBox
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: ({ palette: { grey } }) => grey[50],
          }}
        >
          {messages.length === 0 ? (
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ flex: 1, textAlign: "center" }}
            >
              <MKAvatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "primary.main",
                  mb: 2,
                }}
              >
                <SmartToyIcon sx={{ fontSize: 40 }} />
              </MKAvatar>
              <MKTypography variant="h5" fontWeight="medium" mb={1}>
                Start a conversation
              </MKTypography>
              <MKTypography variant="body2" color="text" sx={{ opacity: 0.7, maxWidth: 400 }}>
                Ask me anything! I&apos;m here to help you with questions, explanations, coding
                help, or just chat.
              </MKTypography>
            </MKBox>
          ) : (
            messages.map((message, index) => (
              <MKBox
                key={index}
                display="flex"
                justifyContent={message.role === "user" ? "flex-end" : "flex-start"}
                gap={1.5}
              >
                {message.role === "assistant" && (
                  <MKAvatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      flexShrink: 0,
                    }}
                  >
                    <SmartToyIcon fontSize="small" />
                  </MKAvatar>
                )}

                <MKBox
                  sx={{
                    maxWidth: "70%",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor:
                      message.role === "user"
                        ? ({ palette: { primary } }) => primary.main
                        : "white",
                    color: message.role === "user" ? "white" : "text.primary",
                    boxShadow: 1,
                    "& p": {
                      margin: 0,
                      marginBottom: 1,
                      "&:last-child": {
                        marginBottom: 0,
                      },
                    },
                    "& ul, & ol": {
                      margin: 0,
                      paddingLeft: 2,
                      marginBottom: 1,
                    },
                    "& li": {
                      marginBottom: 0.5,
                    },
                    "& strong": {
                      fontWeight: "bold",
                    },
                    "& em": {
                      fontStyle: "italic",
                    },
                    "& code": {
                      backgroundColor:
                        message.role === "user" ? "rgba(255,255,255,0.2)" : "grey.200",
                      padding: "2px 4px",
                      borderRadius: 1,
                      fontSize: "0.875em",
                      fontFamily: "monospace",
                    },
                    "& pre": {
                      backgroundColor:
                        message.role === "user" ? "rgba(255,255,255,0.2)" : "grey.200",
                      padding: 1,
                      borderRadius: 1,
                      overflow: "auto",
                      marginBottom: 1,
                      "& code": {
                        backgroundColor: "transparent",
                        padding: 0,
                      },
                    },
                    // KaTeX math styling
                    "& .katex": {
                      fontSize: "1.1em",
                      color: "inherit",
                    },
                    "& .katex-display": {
                      margin: "1em 0",
                      overflowX: "auto",
                      overflowY: "hidden",
                    },
                  }}
                >
                  {message.role === "assistant" ? (
                    <ReactMarkdown
                      remarkPlugins={[[remarkMath, { singleDollarTextMath: false }]]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        p: ({ children }) => (
                          <MKTypography
                            variant="body2"
                            component="p"
                            sx={{
                              wordBreak: "break-word",
                              color: "inherit",
                              marginBottom: 1,
                              "&:last-child": { marginBottom: 0 },
                            }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        strong: ({ children }) => (
                          <MKTypography
                            component="strong"
                            variant="body2"
                            fontWeight="bold"
                            sx={{ color: "inherit" }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        em: ({ children }) => (
                          <MKTypography
                            component="em"
                            variant="body2"
                            sx={{ fontStyle: "italic", color: "inherit" }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        ul: ({ children }) => (
                          <MKBox component="ul" sx={{ margin: 0, paddingLeft: 2, marginBottom: 1 }}>
                            {children}
                          </MKBox>
                        ),
                        ol: ({ children }) => (
                          <MKBox component="ol" sx={{ margin: 0, paddingLeft: 2, marginBottom: 1 }}>
                            {children}
                          </MKBox>
                        ),
                        li: ({ children }) => (
                          <MKTypography
                            component="li"
                            variant="body2"
                            sx={{ color: "inherit", marginBottom: 0.5, wordBreak: "break-word" }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        code: ({ children, className }) => {
                          // Check if this is a math code block (from remark-math)
                          const isMath =
                            className?.includes("language-math") ||
                            className?.includes("language-katex");
                          const isInline = !className || className.startsWith("language-");

                          // For math expressions, let rehype-katex handle it
                          if (isMath) {
                            return <span>{children}</span>;
                          }

                          if (isInline && !className?.startsWith("language-")) {
                            return (
                              <MKBox
                                component="code"
                                sx={{
                                  backgroundColor: "rgba(0,0,0,0.1)",
                                  padding: "2px 4px",
                                  borderRadius: 1,
                                  fontSize: "0.875em",
                                  fontFamily: "monospace",
                                  color: "inherit",
                                }}
                              >
                                {children}
                              </MKBox>
                            );
                          }
                          return (
                            <MKBox
                              component="pre"
                              sx={{
                                backgroundColor: "rgba(0,0,0,0.1)",
                                padding: 1,
                                borderRadius: 1,
                                overflow: "auto",
                                marginBottom: 1,
                              }}
                            >
                              <MKTypography
                                component="code"
                                variant="body2"
                                sx={{
                                  fontFamily: "monospace",
                                  color: "inherit",
                                }}
                              >
                                {children}
                              </MKTypography>
                            </MKBox>
                          );
                        },
                        h1: ({ children }) => (
                          <MKTypography
                            variant="h5"
                            component="h1"
                            sx={{ color: "inherit", marginBottom: 1 }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        h2: ({ children }) => (
                          <MKTypography
                            variant="h6"
                            component="h2"
                            sx={{ color: "inherit", marginBottom: 1 }}
                          >
                            {children}
                          </MKTypography>
                        ),
                        h3: ({ children }) => (
                          <MKTypography
                            variant="body1"
                            component="h3"
                            fontWeight="bold"
                            sx={{ color: "inherit", marginBottom: 1 }}
                          >
                            {children}
                          </MKTypography>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    <MKTypography
                      variant="body2"
                      sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                    >
                      {message.content}
                    </MKTypography>
                  )}
                  {message.files && message.files.length > 0 && (
                    <MKBox mt={1} display="flex" flexDirection="column" gap={0.5}>
                      {message.files.map((file, fileIndex) => (
                        <MKBox
                          key={fileIndex}
                          display="flex"
                          alignItems="center"
                          gap={1}
                          sx={{
                            p: 1,
                            borderRadius: 1,
                            backgroundColor:
                              message.role === "user" ? "rgba(255,255,255,0.1)" : "grey.100",
                          }}
                        >
                          <InsertDriveFileIcon fontSize="small" />
                          <MKTypography variant="caption" sx={{ flex: 1, wordBreak: "break-word" }}>
                            {file.name || file.fileName}
                          </MKTypography>
                          {file.size && (
                            <MKTypography variant="caption" sx={{ opacity: 0.7 }}>
                              {(file.size / 1024).toFixed(1)} KB
                            </MKTypography>
                          )}
                        </MKBox>
                      ))}
                    </MKBox>
                  )}
                </MKBox>

                {message.role === "user" && (
                  <MKAvatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "secondary.main",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon fontSize="small" />
                  </MKAvatar>
                )}
              </MKBox>
            ))
          )}

          {loading && (
            <MKBox display="flex" justifyContent="flex-start" gap={1.5}>
              <MKAvatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "primary.main",
                  flexShrink: 0,
                }}
              >
                <SmartToyIcon fontSize="small" />
              </MKAvatar>
              <MKBox
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "white",
                  boxShadow: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CircularProgress size={16} />
                <MKTypography variant="body2" color="text.secondary">
                  Thinking...
                </MKTypography>
              </MKBox>
            </MKBox>
          )}

          <div ref={messagesEndRef} />
        </MKBox>

        {/* Input Area */}
        <MKBox
          sx={{
            p: 2,
            borderTop: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor}`,
            backgroundColor: "white",
          }}
        >
          {/* Attached Files Preview */}
          {attachedFiles.length > 0 && (
            <MKBox mb={2} display="flex" flexWrap="wrap" gap={1}>
              {attachedFiles.map((file, index) => (
                <MKBox
                  key={index}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: "grey.100",
                    maxWidth: "200px",
                  }}
                >
                  <InsertDriveFileIcon fontSize="small" color="primary" />
                  <MKTypography
                    variant="caption"
                    sx={{
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    title={file.name}
                  >
                    {file.name}
                  </MKTypography>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveFile(index)}
                    sx={{ p: 0.5, ml: 0.5 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </MKBox>
              ))}
            </MKBox>
          )}

          <MKBox display="flex" gap={2} alignItems="flex-end">
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              inputRef={inputRef}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: ({ palette: { grey } }) => grey[50],
                },
              }}
            />
            <input
              ref={fileInputRef}
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <IconButton
              color="secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              sx={{
                bgcolor: "grey.200",
                "&:hover": {
                  bgcolor: "grey.300",
                },
                height: "56px",
                width: "56px",
              }}
              title="Attach file"
            >
              <AttachFileIcon />
            </IconButton>
            <MKBox display="flex" flexDirection="column" gap={1}>
              <IconButton
                color="primary"
                onClick={handleSend}
                disabled={loading || (!inputMessage.trim() && attachedFiles.length === 0)}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  "&.Mui-disabled": {
                    bgcolor: ({ palette: { grey } }) => grey[300],
                    color: ({ palette: { grey } }) => grey[500],
                  },
                  height: "56px",
                  width: "56px",
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
              </IconButton>
              {messages.length > 0 && (
                <MKButton
                  variant="text"
                  color="secondary"
                  size="small"
                  onClick={() => {
                    clearMessages();
                    setAttachedFiles([]);
                  }}
                  sx={{ minWidth: "auto", px: 1 }}
                >
                  Clear
                </MKButton>
              )}
            </MKBox>
          </MKBox>
        </MKBox>
      </Card>

      {/* Snackbar */}
      <MKSnackbar
        color={snackbar.color}
        icon={<Icon>{snackbar.icon}</Icon>}
        title={snackbar.title}
        content={snackbar.content}
        dateTime={snackbar.dateTime}
        open={snackbar.open}
        close={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
}

export default ChatBot;
