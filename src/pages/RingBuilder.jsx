import React, { useState } from "react";

export default function RingBuilder() {
    const [currentPage, setCurrentPage] = useState("builder");
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [openSection, setOpenSection] = useState("Metal Color");

    // Ring configuration state
    const [ringConfig, setRingConfig] = useState({
        metal: "Yellow Gold",
        diamond: "Round Brilliant",
        head: "4 Prong",
        band: "Plain",
        price: "$3,131"
    });

    // Helper for key to force re-render animation
    const ringKey = `${ringConfig.metal}-${ringConfig.diamond}`;

    // Color Logic for Single Image
    const getRingStyle = () => {
        let filter = "contrast(1.05) saturate(1.1)";

        if (ringConfig.metal.includes("White") || ringConfig.metal.includes("Platinum")) {
            // Silver Effect
            filter = "grayscale(100%) brightness(1.1) contrast(1.1)";
        } else if (ringConfig.metal.includes("Rose")) {
            // Rose Gold Effect
            filter = "sepia(0.5) hue-rotate(320deg) contrast(1.1) saturate(1.2)";
        }

        return {
            width: "auto",
            maxWidth: "280px", // Adjusted for new image
            height: "auto",
            filter: filter,
            imageRendering: "high-quality",
            animation: "float3D 6s ease-in-out infinite"
        };
    };




    const getRingImage = () => {
        return "/images/ring_transparent.png";
    };

    const handleSave = () => {
        const saveData = {
            ...ringConfig,
            ringImage: getRingImage(),
            savedAt: new Date().toISOString()
        };
        localStorage.setItem("savedRingConfig", JSON.stringify(saveData));
        setShowSaveModal(true);
    };

    // Accordion Component
    const OptionSection = ({ title, options, currentSelection, onSelect, type }) => {
        const isOpen = openSection === title;

        return (
            <div style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button
                    onClick={() => setOpenSection(isOpen ? "" : title)}
                    style={{
                        width: "100%",
                        padding: "20px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        outline: "none"
                    }}
                >
                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>{title}</span>
                    <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        ▼
                    </span>
                </button>

                {isOpen && (
                    <div style={{ paddingBottom: "24px", animation: "slideDown 0.3s ease-out" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px" }}>
                            {options.map(option => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        setRingConfig(prev => ({ ...prev, [type]: option }));
                                        // Update price logic
                                        if (type === 'metal' || type === 'diamond') {
                                            const basePrice = 3131;
                                            const randomAdd = Math.floor(Math.random() * 500);
                                            setRingConfig(prev => ({ ...prev, [type]: option, price: `$${(basePrice + randomAdd).toLocaleString()}` }));
                                        } else {
                                            setRingConfig(prev => ({ ...prev, [type]: option }));
                                        }
                                    }}
                                    style={{
                                        padding: "12px",
                                        borderRadius: "8px",
                                        border: currentSelection === option ? "2px solid #6366f1" : "1px solid #e5e7eb",
                                        backgroundColor: currentSelection === option ? "#eef2ff" : "#fff",
                                        color: currentSelection === option ? "#6366f1" : "#374151",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        cursor: "pointer",
                                        transition: "all 0.2s"
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    if (currentPage === "email") {
        return <EmailPage ringConfig={ringConfig} ringImage={getRingImage()} onBack={() => setCurrentPage("builder")} />;
    }

    return (
        <div style={{
            minHeight: "100vh",
            backgroundColor: "#fff",
            fontFamily: "'Inter', sans-serif"
        }}>
            <style>{`
                @keyframes float3D {
                    0% { transform: translateY(0px) rotateX(0deg); }
                    50% { transform: translateY(-15px) rotateX(5deg); }
                    100% { transform: translateY(0px) rotateX(0deg); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulseRing {
                    0% { transform: rotateX(60deg) translateY(50px) scale(1); opacity: 0.8; }
                    50% { transform: rotateX(60deg) translateY(50px) scale(1.05); opacity: 1; }
                    100% { transform: rotateX(60deg) translateY(50px) scale(1); opacity: 0.8; }
                }
                
                /* Responsive Styles */
                .builder-grid {
                    display: grid;
                    grid-template-columns: 1fr 400px;
                    height: calc(100vh - 70px - 80px);
                    overflow: hidden;
                }
                .ring-container {
                    padding: 20px;
                }
                .options-panel {
                    overflow-y: auto;
                    height: 100%;
                    padding: 0 32px 32px 32px;
                }
                .bottom-bar {
                    padding: 0 40px;
                    justify-content: flex-end;
                    gap: 30px;
                }

                @media (max-width: 900px) {
                    .builder-grid {
                        grid-template-columns: 1fr; /* Stack vertically */
                        height: auto; /* Allow Scroll */
                        padding-bottom: 90px;
                        overflow-y: visible; /* Ensure scroll works */
                    }
                    .ring-container {
                        height: 350px; /* Slightly smaller height for mobile */
                        background-color: #f9fafb;
                    }
                    .options-panel {
                        border-left: none;
                        border-top: 1px solid #e5e7eb;
                        height: auto;
                        padding: 10px 20px 32px 20px; /* Reduced side padding */
                    }
                     .bottom-bar {
                        padding: 0 15px;
                        gap: 10px;
                        height: 70px; /* Compact bottom bar */
                    }
                    header {
                        padding: 0 20px !important;
                    }
                }

                @media (max-width: 480px) {
                    /* Very small screens */
                    .brand-name {
                        font-size: 18px !important; /* Smaller logo text */
                    }
                    .bottom-bar {
                       justify-content: space-between;
                    }
                    .bottom-bar .flex-col {
                        display: none; /* Hide MSRP text on very small screens if needed, or scale it */
                    }
                     .bottom-bar .text-right {
                        transform: scale(0.9);
                        transform-origin: right center;
                    }
                }
            `}</style>

            {/* HEADER */}
            <header style={{
                backgroundColor: "#fff",
                borderBottom: "1px solid #e5e7eb",
                padding: "0 40px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "sticky",
                top: 0,
                zIndex: 50
            }}>
                {/* 99 DIAMONDS LOGO RECREATION */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="brand-name" style={{ fontFamily: "'Times New Roman', serif", fontSize: "24px", fontWeight: "700", color: "#111827", letterSpacing: "1.5px", position: "relative", lineHeight: "1" }}>
                        99 DIAMONDS
                        {/* Small Blue Diamond like reference */}
                        <span style={{ fontSize: "14px", position: "absolute", top: "-5px", right: "-18px", filter: "hue-rotate(180deg)" }}>💎</span>
                    </div>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#c5a47e", margin: "4px 0" }}></div>
                    <div style={{ fontFamily: "sans-serif", fontSize: "9px", letterSpacing: "4px", color: "#6b7280", marginLeft: "2px" }}>
                        COPENHAGEN
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <div className="builder-grid">
                {/* LEFT SIDE - DISPLAY */}
                <div className="ring-container" style={{
                    background: "radial-gradient(circle at center, #ffffff 0%, #e5e7eb 100%)", // Studio Gradient Background
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    height: "100%",
                    overflow: "hidden"
                }}>
                    {/* Ring Image Only - No platform */}
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10
                    }}>
                        <ZoomableRing
                            key={ringKey}
                            src={getRingImage()}
                            alt="Custom Ring"
                            style={getRingStyle()}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE - ACCORDION OPTIONS */}
                <div className="options-panel" style={{ backgroundColor: "#fff" }}>
                    <div style={{ paddingTop: "32px", paddingBottom: "20px" }}>
                        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px" }}>Customize Ring</h2>
                        <p style={{ color: "#6b7280" }}>Select your options below</p>
                    </div>

                    <OptionSection
                        title="Metal Color"
                        type="metal"
                        options={["Yellow Gold", "White Gold", "Rose Gold", "Platinum"]}
                        currentSelection={ringConfig.metal}
                    />

                    <OptionSection
                        title="Diamond Shape"
                        type="diamond"
                        options={["Round Brilliant", "Princess", "Cushion", "Oval"]}
                        currentSelection={ringConfig.diamond}
                    />

                    <OptionSection
                        title="Head Style"
                        type="head"
                        options={["4 Prong", "6 Prong", "Bezel", "Halo"]}
                        currentSelection={ringConfig.head}
                    />

                    <OptionSection
                        title="Band Style"
                        type="band"
                        options={["Plain", "Pavé", "Channel", "Twisted"]}
                        currentSelection={ringConfig.band}
                    />

                    {/* Spacer for bottom bar visibility on mobile */}
                    <div style={{ height: "40px" }}></div>
                </div>
            </div>

            {/* NEW BOTTOM BAR */}
            <div className="bottom-bar" style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                backgroundColor: "#31364a",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
                zIndex: 100
            }}>
                {/* Price Section */}
                <div className="text-right flex flex-col items-end text-white mr-auto">
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                        MSRP {ringConfig.price}
                    </div>
                    <div style={{ fontSize: "12px", opacity: 0.7 }}>
                        (Setting only)
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    style={{
                        padding: "10px 24px",
                        backgroundColor: "#424b66",
                        color: "#fff",
                        border: "1px solid #5a6482",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#525c7a"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#424b66"}
                >
                    Save
                </button>

                {/* Next Button */}
                <button
                    onClick={() => setCurrentPage("email")}
                    style={{
                        padding: "10px 32px",
                        backgroundColor: "#fff",
                        color: "#31364a",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "15px",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.2s"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#f3f4f6"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#fff"}
                >
                    Next
                </button>
            </div>


            {/* SAVE MODAL */}
            {showSaveModal && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1000,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "20px"
                }}>
                    <div style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "16px", width: "100%", maxWidth: "500px", textAlign: "center", position: "relative" }}>
                        <button onClick={() => setShowSaveModal(false)} style={{ position: "absolute", top: "16px", right: "16px", border: "none", background: "none", fontSize: "20px", cursor: "pointer" }}>×</button>
                        <div style={{ fontSize: "50px", marginBottom: "20px" }}>💎</div>
                        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Design Saved!</h2>
                        <p style={{ color: "#6b7280", marginBottom: "20px" }}>Your {ringConfig.metal} ring with {ringConfig.diamond} diamond is saved.</p>
                        <button onClick={() => { setShowSaveModal(false); setCurrentPage("email"); }} style={{ width: "100%", padding: "14px", backgroundColor: "#6366f1", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}>Proceed to Email</button>
                    </div>
                </div>
            )}
        </div>
    );
}

// TOP CLASS EMAIL PAGE
function EmailPage({ ringConfig, ringImage, onBack }) {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailData = { clientInfo: formData, ringDesign: { ...ringConfig, image: ringImage }, timestamp: new Date() };
        console.log("Email Sent to Admin:", emailData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div style={{
                minHeight: "100vh",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "24px",
                animation: "slideDown 0.5s ease-out",
                padding: "20px"
            }}>
                <div style={{ fontSize: "60px", marginBottom: "10px" }}>✅</div>
                <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", textAlign: "center" }}>Request Sent!</h1>
                <p style={{ fontSize: "16px", color: "#6b7280", textAlign: "center", maxWidth: "400px" }}>
                    Thank you, {formData.name}. We have received your custom ring design request and will be in touch shortly.
                </p>
                <button
                    onClick={onBack}
                    style={{
                        marginTop: "20px",
                        padding: "14px 32px",
                        backgroundColor: "#111827",
                        color: "white",
                        borderRadius: "50px",
                        fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        transition: "transform 0.2s"
                    }}
                >
                    Back to Collection
                </button>
            </div>
        )
    }

    return (
        <div style={{
            minHeight: "100vh",
            backgroundColor: "#f9fafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px"
        }}>
            <style>{`
                .email-card-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                }
                @media (max-width: 900px) {
                    .email-card-grid {
                        grid-template-columns: 1fr;
                    }
                    .summary-section {
                        padding: 40px !important;
                    }
                    .form-section {
                        padding: 40px 20px !important;
                    }
                }
            `}</style>
            <div className="email-card-grid" style={{
                maxWidth: "1100px",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "24px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                overflow: "hidden"
            }}>

                {/* LEFT SIDE - SUMMARY CARD */}
                <div className="summary-section" style={{
                    backgroundColor: "#1f2937",
                    color: "#fff",
                    padding: "60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    {/* Background decoration */}
                    <div style={{
                        position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px",
                        background: "rgba(255,255,255,0.05)", borderRadius: "50%"
                    }} />

                    <button onClick={onBack} style={{
                        position: "absolute", top: "40px", left: "40px",
                        background: "rgba(255,255,255,0.1)", color: "#fff", border: "none",
                        padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontSize: "14px"
                    }}>
                        ← Back to Editor
                    </button>

                    <div style={{ textAlign: "center", marginBottom: "40px", marginTop: "40px" }}>
                        <img
                            src={ringImage}
                            alt="Ring"
                            style={{
                                width: "160px",
                                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
                                animation: "float3D 6s ease-in-out infinite"
                            }}
                        />
                    </div>

                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px" }}>
                        <h2 style={{ fontSize: "24px", fontWeight: "300", letterSpacing: "1px", marginBottom: "20px" }}>Your Selection</h2>

                        <div style={{ display: "grid", gap: "16px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", opacity: 0.8 }}>
                                <span>Metal</span>
                                <span style={{ fontWeight: "600", color: "#fff" }}>{ringConfig.metal}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", opacity: 0.8 }}>
                                <span>Diamond</span>
                                <span style={{ fontWeight: "600", color: "#fff" }}>{ringConfig.diamond}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", opacity: 0.8 }}>
                                <span>Style</span>
                                <span style={{ fontWeight: "600", color: "#fff" }}>{ringConfig.head} Head</span>
                            </div>
                        </div>

                        <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "14px", opacity: 0.6 }}>Estimated Total</span>
                            <span style={{ fontSize: "28px", fontWeight: "700" }}>{ringConfig.price}</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div className="form-section" style={{ padding: "60px" }}>
                    <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", marginBottom: "10px" }}>Finalize Request</h2>
                    <p style={{ color: "#6b7280", marginBottom: "40px", lineHeight: "1.6" }}>
                        Send this design to our jewelry experts. We will confirm availability and schedule a viewing.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "13px", fontWeight: "600", color: "#374151", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name</label>
                                <input
                                    type="text" required
                                    style={{ padding: "16px", borderRadius: "8px", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", fontSize: "15px", outline: "none", transition: "border 0.2s" }}
                                    onFocus={e => { e.target.style.borderColor = "#6366f1"; e.target.style.backgroundColor = "#fff" }}
                                    onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.backgroundColor = "#f9fafb" }}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "13px", fontWeight: "600", color: "#374151", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email Address</label>
                                <input
                                    type="email" required
                                    style={{ padding: "16px", borderRadius: "8px", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", fontSize: "15px", outline: "none", transition: "border 0.2s" }}
                                    onFocus={e => { e.target.style.borderColor = "#6366f1"; e.target.style.backgroundColor = "#fff" }}
                                    onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.backgroundColor = "#f9fafb" }}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: "600", color: "#374151", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone Number</label>
                            <input
                                type="tel"
                                style={{ padding: "16px", borderRadius: "8px", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", fontSize: "15px", outline: "none", transition: "border 0.2s" }}
                                onFocus={e => { e.target.style.borderColor = "#6366f1"; e.target.style.backgroundColor = "#fff" }}
                                onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.backgroundColor = "#f9fafb" }}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "13px", fontWeight: "600", color: "#374151", textTransform: "uppercase", letterSpacing: "0.5px" }}>Specific Requests</label>
                            <textarea
                                rows={4}
                                style={{ padding: "16px", borderRadius: "8px", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", fontSize: "15px", outline: "none", transition: "border 0.2s", resize: "none" }}
                                onFocus={e => { e.target.style.borderColor = "#6366f1"; e.target.style.backgroundColor = "#fff" }}
                                onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.backgroundColor = "#f9fafb" }}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                marginTop: "20px",
                                padding: "18px",
                                backgroundColor: "#111827",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                fontSize: "16px",
                                fontWeight: "700",
                                cursor: "pointer",
                                letterSpacing: "0.5px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                transition: "all 0.2s"
                            }}
                            onMouseOver={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)" }}
                            onMouseOut={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)" }}
                        >
                            Send Enquiry Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// ZOOMABLE RING COMPONENT
function ZoomableRing({ src, alt, style }) {
    const [scale, setScale] = useState(1);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onWheel = (e) => {
            e.preventDefault();
            // Determine delta: Normalize for different browsers/devices
            // For trackpad, deltaY is usually small. For mouse, 100.
            const delta = -e.deltaY * 0.002;

            setScale(prev => {
                const newScale = prev + delta;
                return Math.min(Math.max(0.5, newScale), 4); // Clamp between 0.5x and 4x
            });
        };

        // Add passive: false to allow preventDefault (stops page scroll)
        container.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', onWheel);
        };
    }, []);

    // Extract animation to apply to wrapper, keep other styles for image
    const { animation, ...imgStyle } = style || {};

    return (
        <div
            style={{
                animation: animation, // Floating animation on wrapper
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-in",
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }}
        >
            <div
                ref={containerRef}
                style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.05s ease-out", // Smooth zoom
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    transformOrigin: "center center"
                }}
            >
                <img src={src} alt={alt} style={{ ...imgStyle, pointerEvents: "none" }} />
            </div>
        </div>
    );
}
