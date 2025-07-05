import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Calendar, Building2, ExternalLink, CheckCircle, Clock, Star } from 'lucide-react';

const Blockchain = () => {
  const certificates = [
    {
      id: '1',
      title: 'Certified Blockchain Developer',
      organization: 'Ethereum Foundation',
      dateEarned: '2024-01-15',
      verificationStatus: 'verified',
      blockchainNetwork: 'Ethereum',
      credentialId: 'ETH-CBD-2024-001',
      skills: ['Smart Contracts', 'Solidity', 'Web3.js'],
      certificateUrl: '#',
      featured: true
    },
    {
      id: '2',
      title: 'DeFi Protocol Specialist',
      organization: 'ConsenSys Academy',
      dateEarned: '2024-02-20',
      verificationStatus: 'verified',
      blockchainNetwork: 'Polygon',
      credentialId: 'POLY-DPS-2024-002',
      skills: ['DeFi', 'Liquidity Pools', 'Yield Farming']
    },
    {
      id: '3',
      title: 'NFT Development Mastery',
      organization: 'OpenSea Institute',
      dateEarned: '2024-03-10',
      verificationStatus: 'verified',
      blockchainNetwork: 'Ethereum',
      credentialId: 'ETH-NFT-2024-003',
      skills: ['NFTs', 'ERC-721', 'IPFS', 'Metadata']
    },
    {
      id: '4',
      title: 'Blockchain Security Auditor',
      organization: 'CertiK Academy',
      dateEarned: '2024-03-25',
      verificationStatus: 'pending',
      blockchainNetwork: 'Multi-chain',
      credentialId: 'MC-BSA-2024-004',
      skills: ['Security Auditing', 'Vulnerability Assessment', 'Smart Contract Analysis']
    },
    {
      id: '5',
      title: 'Web3 Frontend Developer',
      organization: 'Moralis Academy',
      dateEarned: '2024-04-05',
      verificationStatus: 'verified',
      blockchainNetwork: 'Ethereum',
      credentialId: 'ETH-W3F-2024-005',
      skills: ['React', 'Web3 Integration', 'MetaMask', 'Ethers.js']
    },
    {
      id: '6',
      title: 'Cryptocurrency Trading Expert',
      organization: 'Binance Academy',
      dateEarned: '2024-04-18',
      verificationStatus: 'verified',
      blockchainNetwork: 'Binance Smart Chain',
      credentialId: 'BSC-CTE-2024-006',
      skills: ['Technical Analysis', 'Risk Management', 'Portfolio Optimization']
    }
  ];

  const getVerificationColor = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expired':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getVerificationIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const featuredCertificate = certificates.find(cert => cert.featured);
  const regularCertificates = certificates.filter(cert => !cert.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Award className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Blockchain Certificates
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Track your blockchain achievements and showcase your expertise to the world. 
          Each certificate is verified on the blockchain, ensuring authenticity and permanence.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            <strong>Why Blockchain Certificates Matter:</strong> Your achievements are permanently recorded on the blockchain, 
            making them tamper-proof and instantly verifiable by employers, peers, and institutions worldwide. 
            Build your reputation in the decentralized future with credentials that truly belong to you.
          </p>
        </div>
      </motion.div>

      {/* Featured Certificate */}
      {featuredCertificate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full">
                  FEATURED ACHIEVEMENT
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredCertificate.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-blue-100">
                      <Building2 className="w-5 h-5 mr-3" />
                      <span className="text-lg">{featuredCertificate.organization}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>Earned on {formatDate(featuredCertificate.dateEarned)}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Shield className="w-5 h-5 mr-3" />
                      <span>Network: {featuredCertificate.blockchainNetwork}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredCertificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-end space-y-4">
                  <div className={`flex items-center px-4 py-2 rounded-full text-sm font-medium border bg-white ${getVerificationColor(featuredCertificate.verificationStatus)}`}>
                    {getVerificationIcon(featuredCertificate.verificationStatus)}
                    <span className="ml-2 capitalize">{featuredCertificate.verificationStatus}</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-blue-100 text-sm mb-2">Credential ID</p>
                    <p className="font-mono text-sm bg-white bg-opacity-20 px-3 py-1 rounded">
                      {featuredCertificate.credentialId}
                    </p>
                  </div>
                  
                  {featuredCertificate.certificateUrl && (
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Certificates Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-screen overflow-y-auto"
      >
        {regularCertificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getVerificationColor(certificate.verificationStatus)}`}>
                  {getVerificationIcon(certificate.verificationStatus)}
                  <span className="ml-2 capitalize">{certificate.verificationStatus}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {certificate.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span>{certificate.organization}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(certificate.dateEarned)}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>{certificate.blockchainNetwork}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Skills Demonstrated:</p>
                <div className="flex flex-wrap gap-1">
                  {certificate.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{certificate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                <p className="font-mono text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded">
                  {certificate.credentialId}
                </p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{certificates.length}</div>
            <div className="text-gray-600">Total Certificates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {certificates.filter(c => c.verificationStatus === 'verified').length}
            </div>
            <div className="text-gray-600">Verified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {new Set(certificates.map(c => c.blockchainNetwork)).size}
            </div>
            <div className="text-gray-600">Networks</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blockchain;
