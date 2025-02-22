module.exports = {
  docsJavaSidebar: [
    'overview-cloud-sdk-for-java',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: [
        // authorization & authentication
        {
          type: 'category',
          label: 'OData',
          items: [
            'features/odata/overview',
            'features/odata/generate-typed-odata-v2-and-v4-client-for-java',
            'features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java',
            'features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java',
            'features/odata/generic-untyped-odata-client'
          ]
        },
        {
          type: 'category',
          label: 'OpenAPI',
          items: [
            'features/rest/overview',
            'features/rest/generate-rest-client',
            {
              type: 'category',
              label: 'Released Clients',
              items: [
                'features/rest/clients/scp-workflow-rest-api',
                'features/rest/clients/btp-business-rules-rest-api'
              ]
            }
          ]
        },
        'features/bapi-and-rfc/bapi-and-rfc-overview',
        {
          type: 'category',
          label: 'Connectivity',
          items: [
            'features/connectivity/sdk-connectivity-destination-service',
            'features/connectivity/sdk-connectivity-http-client',
            'features/connectivity/sdk-connectivity-mtls'
          ]
        },
        {
          type: 'category',
          label: 'Multitenancy',
          items: ['features/multi-tenancy/multi-tenancy-thread-context']
        },
        {
          type: 'category',
          label: 'Resilience & Caching',
          items: [
            'features/resilience/resilience',
            'features/resilience/caching'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Environments',
      items: [
        'environments/sap-btp-environments-overview',
        'environments/sap-btp-cloud-foundry-environment',
        'environments/sap-btp-kubernetes-environment-with-sap-gardener',
        'environments/sap-btp-kyma-environment'
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/4.0-upgrade',
        'guides/manage-dependencies',
        'guides/cap-sdk-integration',
        'guides/logging-overview',
        'guides/spring-boot-war-deployment',
        'guides/tutorial-overview-sdk-java',
        'guides/cloud-foundry-xsuaa-service',
        'guides/cf-deploy',
        'guides/cf-cli',
        'guides/sap-cloud-sdk-linux-how-to'
      ]
    },
    {
      type: 'category',
      label: 'Extensions',
      items: ['extensions/extensions-supported-by-sap-cloud-sdk-for-java']
    },
    {
      type: 'category',
      label: 'Video Tutorials',
      items: [
        'video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java',
        'video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client'
      ]
    },
    'sdk-java-troubleshooting-frequent-problems',
    'release-policy',
    'release-notes-sap-cloud-sdk-for-java',
    'support-java',
    'frequently-asked-questions',
    {
      type: 'link',
      label: 'Maven Central',
      href: 'https://search.maven.org/search?q=g:com.sap.cloud.sdk*'
    }
  ]
};
