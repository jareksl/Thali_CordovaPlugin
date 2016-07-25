'use strict';

module.exports = {
  SSDP_NT: 'http://www.thaliproject.org/ssdp',
  SSDP_ADVERTISEMENT_INTERVAL: 500,
  PEER_AVAILABILITY_WATCHER_INTERVAL: 1000,
  TCP_PEER_UNAVAILABILITY_THRESHOLD: 5 * 500,
  NON_TCP_PEER_UNAVAILABILITY_THRESHOLD: 30 * 1000,
  TCP_TIMEOUT_WIFI: 1000,
  TCP_TIMEOUT_BLUETOOTH: 5000,
  TCP_TIMEOUT_MPCF: 5000,
  NOTIFICATION_BEACON_PATH: '/NotificationBeacons',
  BEACON_MILLISECONDS_TO_EXPIRE: 60 * 60 * 1000,
  BASE_DB_PATH: '/db',
  BASE_DB_PREFIX: '',
  SUPPORTED_PSK_CIPHERS: 'PSK-AES256-CBC-SHA',
  BEACON_CURVE: 'secp256k1',
  MAXIMUM_NATIVE_PEERS_CREATE_PEER_LISTENER_ADVERTISES: 20,
  BEACON_PSK_IDENTITY: 'Beacon Please',
  BEACON_KEY: new Buffer('Let me in please!!'),
  MILLISECONDS_TO_WAIT_FOR_REVERSE_CONNECTION: 1000,
  MAX_NOTIFICATIONSERVER_PSK_MAP_CACHE_SIZE: 50,
  LOCAL_SEQ_POINT_PREFIX: 'thali_'
};
