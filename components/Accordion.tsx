import { BiPlus } from "react-icons/bi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ContentPlaceholderProps {
    content?: string;
}

const ContentPlaceholder = ({ content }: ContentPlaceholderProps) => (
    <motion.li
        variants={{
            collapsed: { scale: 0.8, opacity: 0 },
            open: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.8, type: "linear", ease: "linear" }}
        className="accordion-item"
    >
        <RiArrowDropRightLine /> {content}
    </motion.li>
);

interface AccordionProps {
    isOpen?: boolean;
    expanded?: boolean;
    setExpanded?: any;
}

const Accordion = ({}: AccordionProps) => {
    const [expanded, setExpanded] = useState(false);
    const isOpen = expanded;
    return (
        <div className="accordion">
            <motion.button
                initial={false}
                animate={{}}
                onClick={() => setExpanded(!expanded)}
                className="accordion-header"
            >
                <BiPlus /> Type
            </motion.button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        className="accordion-content"
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                    >
                        <ContentPlaceholder content="Hello World" />
                        <ContentPlaceholder content="Hello World" />
                        <ContentPlaceholder content="Hello World" />
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
