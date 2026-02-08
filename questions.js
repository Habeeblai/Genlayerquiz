// Questions Database
const QUESTIONS_DB = {
    easy: [
        {
            question: "What is GenLayer?",
            options: [
                "A traditional blockchain platform",
                "A blockchain with integrated AI for intelligent contracts",
                "A cryptocurrency exchange",
                "A mining hardware manufacturer"
            ],
            correctAnswer: "A blockchain with integrated AI for intelligent contracts",
            explanation: "GenLayer is an innovative blockchain platform that integrates AI capabilities to enable intelligent contracts that can make complex decisions."
        },
        {
            question: "What makes GenLayer different from traditional blockchains?",
            options: [
                "It's faster",
                "It integrates AI for contract intelligence",
                "It's cheaper",
                "It uses proof of work"
            ],
            correctAnswer: "It integrates AI for contract intelligence",
            explanation: "GenLayer's key innovation is the integration of AI, allowing smart contracts to perform complex reasoning and decision-making."
        },
        {
            question: "What is the name of GenLayer's mascot?",
            options: [
                "Genny",
                "Layer",
                "Mochi",
                "Blocky"
            ],
            correctAnswer: "Mochi",
            explanation: "Mochi is the adorable mascot of GenLayer, representing the friendly and innovative spirit of the community."
        },
        {
            question: "What type of contracts does GenLayer support?",
            options: [
                "Only simple token transfers",
                "Intelligent contracts with AI capabilities",
                "Traditional smart contracts only",
                "No contracts at all"
            ],
            correctAnswer: "Intelligent contracts with AI capabilities",
            explanation: "GenLayer enables intelligent contracts that can leverage AI for complex decision-making beyond traditional smart contracts."
        },
        {
            question: "Which consensus mechanism does GenLayer use?",
            options: [
                "Proof of Work",
                "Proof of Stake",
                "Optimistic Democracy",
                "Delegated Proof of Stake"
            ],
            correctAnswer: "Optimistic Democracy",
            explanation: "GenLayer uses a unique consensus mechanism called Optimistic Democracy, which leverages AI validators."
        },
        {
            question: "What can GenLayer intelligent contracts access?",
            options: [
                "Only on-chain data",
                "Web data and APIs through AI",
                "Nothing outside the blockchain",
                "Only price feeds"
            ],
            correctAnswer: "Web data and APIs through AI",
            explanation: "GenLayer's intelligent contracts can access and process data from the web and external APIs through AI integration."
        },
        {
            question: "What is a key benefit of GenLayer's AI integration?",
            options: [
                "Faster transactions only",
                "Lower fees only",
                "Complex decision-making in contracts",
                "Mining rewards"
            ],
            correctAnswer: "Complex decision-making in contracts",
            explanation: "AI integration allows contracts to make sophisticated decisions based on real-world data and complex logic."
        },
        {
            question: "How does GenLayer ensure validator agreement?",
            options: [
                "Through mining",
                "Through staking only",
                "Through AI-powered consensus verification",
                "Through voting only"
            ],
            correctAnswer: "Through AI-powered consensus verification",
            explanation: "GenLayer uses AI validators that reach consensus through intelligent verification of contract execution."
        },
        {
            question: "What programming approach does GenLayer use?",
            options: [
                "Traditional Solidity only",
                "Natural language and code",
                "Assembly only",
                "No programming needed"
            ],
            correctAnswer: "Natural language and code",
            explanation: "GenLayer allows developers to use natural language instructions alongside traditional code for intelligent contracts."
        },
        {
            question: "What is GenLayer's vision?",
            options: [
                "To be the fastest blockchain",
                "To be the cheapest blockchain",
                "To create intelligent, autonomous blockchain applications",
                "To replace all blockchains"
            ],
            correctAnswer: "To create intelligent, autonomous blockchain applications",
            explanation: "GenLayer aims to enable truly intelligent and autonomous applications through AI-blockchain integration."
        }
    ],
    medium: [
        {
            question: "How do GenLayer validators differ from traditional blockchain validators?",
            options: [
                "They mine blocks faster",
                "They use AI models to validate contract execution",
                "They stake more tokens",
                "They use specialized hardware"
            ],
            correctAnswer: "They use AI models to validate contract execution",
            explanation: "GenLayer validators run AI models to intelligently verify contract execution and reach consensus."
        },
        {
            question: "What is the Equivalence Principle in GenLayer?",
            options: [
                "All transactions cost the same",
                "All validators have equal power",
                "Ensuring AI validators produce semantically equivalent results",
                "All tokens are worth the same"
            ],
            correctAnswer: "Ensuring AI validators produce semantically equivalent results",
            explanation: "The Equivalence Principle ensures different AI validators agree on the semantic meaning of contract execution."
        },
        {
            question: "What can intelligent contracts do that traditional smart contracts cannot?",
            options: [
                "Execute faster",
                "Access and reason about real-world data",
                "Use less gas",
                "Mine blocks"
            ],
            correctAnswer: "Access and reason about real-world data",
            explanation: "Intelligent contracts can fetch, process, and reason about real-world data through AI capabilities."
        },
        {
            question: "How does GenLayer handle non-deterministic AI outputs?",
            options: [
                "It doesn't allow them",
                "Through consensus on semantic equivalence",
                "By using only one validator",
                "By avoiding AI completely"
            ],
            correctAnswer: "Through consensus on semantic equivalence",
            explanation: "GenLayer's consensus mechanism verifies that AI outputs are semantically equivalent even if not identical."
        },
        {
            question: "What role does the web play in GenLayer contracts?",
            options: [
                "No role - it's completely isolated",
                "Only for hosting the blockchain",
                "Contracts can fetch and use web data",
                "Only for user interfaces"
            ],
            correctAnswer: "Contracts can fetch and use web data",
            explanation: "GenLayer contracts can access web APIs and data sources to make informed decisions."
        },
        {
            question: "What is a key challenge GenLayer solves?",
            options: [
                "Making blockchains faster",
                "Bridging AI intelligence with blockchain trustlessness",
                "Reducing token supply",
                "Increasing mining rewards"
            ],
            correctAnswer: "Bridging AI intelligence with blockchain trustlessness",
            explanation: "GenLayer innovatively combines AI's intelligence with blockchain's security and decentralization."
        },
        {
            question: "How does GenLayer ensure contract execution is fair?",
            options: [
                "Through proof of work",
                "Through multiple AI validators reaching consensus",
                "Through human reviewers",
                "Through automated testing only"
            ],
            correctAnswer: "Through multiple AI validators reaching consensus",
            explanation: "Multiple independent AI validators must agree on contract execution for it to be finalized."
        },
        {
            question: "What is the GenLayer testnet used for?",
            options: [
                "Mining real tokens",
                "Testing and developing intelligent contracts",
                "Storing data permanently",
                "Trading cryptocurrencies"
            ],
            correctAnswer: "Testing and developing intelligent contracts",
            explanation: "The testnet allows developers to experiment with and test intelligent contracts before mainnet deployment."
        },
        {
            question: "What makes GenLayer's consensus optimistic?",
            options: [
                "It's always positive",
                "It assumes correctness unless challenged",
                "It's faster than others",
                "It requires no validation"
            ],
            correctAnswer: "It assumes correctness unless challenged",
            explanation: "Optimistic Democracy assumes execution is correct but allows challenges, making it efficient while remaining secure."
        },
        {
            question: "How can developers interact with GenLayer?",
            options: [
                "Only through mining",
                "Through SDKs, APIs, and development tools",
                "Only through web interfaces",
                "Only through smart contracts"
            ],
            correctAnswer: "Through SDKs, APIs, and development tools",
            explanation: "GenLayer provides comprehensive development tools including SDKs and APIs for building intelligent contracts."
        }
    ],
    hard: [
        {
            question: "What is the technical challenge of integrating LLMs into blockchain consensus?",
            options: [
                "LLMs are too slow",
                "LLMs are non-deterministic while blockchains require determinism",
                "LLMs are too expensive",
                "LLMs can't process blockchain data"
            ],
            correctAnswer: "LLMs are non-deterministic while blockchains require determinism",
            explanation: "The core challenge is that LLMs produce varied outputs while blockchains traditionally require identical results across all validators."
        },
        {
            question: "How does GenLayer's Optimistic Democracy handle disputes?",
            options: [
                "Through voting only",
                "Through challenge-response with additional validators",
                "Through human intervention",
                "Through proof of work"
            ],
            correctAnswer: "Through challenge-response with additional validators",
            explanation: "When execution is challenged, additional validators are called to verify and reach consensus on the correct outcome."
        },
        {
            question: "What is the role of the Equivalence Principle in validator consensus?",
            options: [
                "To make all validators identical",
                "To verify semantic similarity despite output variations",
                "To ensure equal validator rewards",
                "To synchronize validator clocks"
            ],
            correctAnswer: "To verify semantic similarity despite output variations",
            explanation: "The Equivalence Principle allows validators to agree on meaning even when AI outputs differ in exact wording."
        },
        {
            question: "How does GenLayer handle oracle problems?",
            options: [
                "It doesn't use oracles",
                "Validators directly access and verify external data through AI",
                "It uses traditional oracle networks",
                "It avoids external data"
            ],
            correctAnswer: "Validators directly access and verify external data through AI",
            explanation: "GenLayer eliminates traditional oracles by having validators intelligently fetch and verify external data."
        },
        {
            question: "What cryptographic primitives does GenLayer use for validator selection?",
            options: [
                "Only SHA-256",
                "Verifiable Random Functions (VRF) for fair selection",
                "Proof of Work hashing",
                "No cryptography needed"
            ],
            correctAnswer: "Verifiable Random Functions (VRF) for fair selection",
            explanation: "VRFs ensure validators are selected fairly and unpredictably while remaining verifiable."
        },
        {
            question: "What is the economic model behind GenLayer validators?",
            options: [
                "Free validation",
                "Stake-based participation with rewards and slashing",
                "Mining-based rewards only",
                "No economic incentives"
            ],
            correctAnswer: "Stake-based participation with rewards and slashing",
            explanation: "Validators stake tokens and are rewarded for honest behavior, with slashing penalties for dishonesty."
        },
        {
            question: "How does GenLayer ensure intelligent contract security?",
            options: [
                "Through code audits only",
                "Through multi-validator consensus and formal verification",
                "Through testing only",
                "Through human review"
            ],
            correctAnswer: "Through multi-validator consensus and formal verification",
            explanation: "Security comes from multiple validators agreeing on execution and formal verification of contract logic."
        },
        {
            question: "What is the finality model in GenLayer?",
            options: [
                "Immediate finality",
                "Probabilistic finality",
                "Optimistic finality with challenge period",
                "No finality guarantees"
            ],
            correctAnswer: "Optimistic finality with challenge period",
            explanation: "Transactions are optimistically final but can be challenged within a specific time window."
        },
        {
            question: "How does GenLayer handle contract upgradeability?",
            options: [
                "Contracts are immutable",
                "Through governance-controlled upgrades with AI validation",
                "Automatic upgrades",
                "Manual administrator control"
            ],
            correctAnswer: "Through governance-controlled upgrades with AI validation",
            explanation: "Upgrades are governed by the community with AI validators ensuring upgrade correctness."
        },
        {
            question: "What is the role of the GenLayer Virtual Machine?",
            options: [
                "Only executing smart contracts",
                "Executing intelligent contracts with AI integration",
                "Mining blocks",
                "Storing data"
            ],
            correctAnswer: "Executing intelligent contracts with AI integration",
            explanation: "The GenLayer VM provides the runtime environment for intelligent contracts with AI capabilities."
        }
    ],
    expert: [
        {
            question: "How does GenLayer achieve Byzantine Fault Tolerance with non-deterministic AI?",
            options: [
                "It doesn't achieve BFT",
                "Through probabilistic BFT with semantic equivalence thresholds",
                "Through traditional PBFT",
                "Through proof of work"
            ],
            correctAnswer: "Through probabilistic BFT with semantic equivalence thresholds",
            explanation: "GenLayer achieves BFT by requiring a supermajority of validators to agree on semantic equivalence of AI outputs."
        },
        {
            question: "What is the computational complexity of GenLayer's consensus mechanism?",
            options: [
                "O(n) where n is validator count",
                "O(n²) due to pairwise comparisons",
                "O(log n) through optimistic validation",
                "O(1) constant time"
            ],
            correctAnswer: "O(log n) through optimistic validation",
            explanation: "Optimistic validation allows sublinear complexity by only requiring full validation when challenged."
        },
        {
            question: "How does GenLayer prevent validator collusion in AI-based consensus?",
            options: [
                "Through social reputation",
                "Through cryptographic randomness in validator selection and stake slashing",
                "Through proof of work",
                "It doesn't prevent collusion"
            ],
            correctAnswer: "Through cryptographic randomness in validator selection and stake slashing",
            explanation: "Unpredictable validator selection and economic penalties make collusion economically infeasible."
        },
        {
            question: "What is the theoretical limit of GenLayer's transaction throughput?",
            options: [
                "Limited by AI inference speed and validator communication",
                "Unlimited throughput",
                "Limited only by network bandwidth",
                "Fixed at 1000 TPS"
            ],
            correctAnswer: "Limited by AI inference speed and validator communication",
            explanation: "Throughput is bounded by the time required for AI inference and reaching validator consensus."
        },
        {
            question: "How does GenLayer handle cross-shard communication with AI validators?",
            options: [
                "It doesn't use sharding",
                "Through AI-mediated cross-shard messaging with semantic verification",
                "Through traditional relay chains",
                "Through centralized coordinators"
            ],
            correctAnswer: "Through AI-mediated cross-shard messaging with semantic verification",
            explanation: "AI validators verify the semantic correctness of cross-shard communications while maintaining security."
        },
        {
            question: "What is the role of zero-knowledge proofs in GenLayer's architecture?",
            options: [
                "No role - ZKPs aren't used",
                "Proving AI model integrity without revealing model weights",
                "Only for privacy",
                "Only for scaling"
            ],
            correctAnswer: "Proving AI model integrity without revealing model weights",
            explanation: "ZKPs allow validators to prove they're running correct AI models without exposing proprietary details."
        },
        {
            question: "How does GenLayer's gas model differ from Ethereum's?",
            options: [
                "It's identical",
                "It accounts for AI inference costs and web data fetching",
                "It's free",
                "It only charges for storage"
            ],
            correctAnswer: "It accounts for AI inference costs and web data fetching",
            explanation: "GenLayer's gas model includes costs for AI computation and external data access, not just EVM operations."
        },
        {
            question: "What is the worst-case scenario for GenLayer's liveness under adversarial conditions?",
            options: [
                "Immediate halt",
                "Degraded performance until honest validator supermajority restores consensus",
                "No impact",
                "Permanent failure"
            ],
            correctAnswer: "Degraded performance until honest validator supermajority restores consensus",
            explanation: "Under adversarial conditions, the network may slow but remains live if honest validators maintain supermajority."
        },
        {
            question: "How does GenLayer ensure reproducibility of AI-based contract execution?",
            options: [
                "Through identical AI models",
                "Through deterministic AI inference with fixed seeds and model versions",
                "Through human verification",
                "It doesn't ensure reproducibility"
            ],
            correctAnswer: "Through deterministic AI inference with fixed seeds and model versions",
            explanation: "Validators use versioned AI models with deterministic settings to ensure reproducible inference."
        },
        {
            question: "What is the theoretical security model of GenLayer under adaptive adversaries?",
            options: [
                "No security guarantees",
                "Security holds under honest majority with adaptive stake-based attacks bounded by slashing",
                "Perfect security",
                "Security through obscurity"
            ],
            correctAnswer: "Security holds under honest majority with adaptive stake-based attacks bounded by slashing",
            explanation: "GenLayer maintains security if honest validators hold majority stake, with economic penalties limiting adaptive attacks."
        }
    ]
};
