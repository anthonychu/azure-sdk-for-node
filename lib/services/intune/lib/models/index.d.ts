/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
// TODO: Include PageTemplateModels here too?? Probably
 */


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {object} [tags] Resource Tags
 * 
 * @member {string} [location] Resource Location
 * 
 */
export interface Resource extends BaseResource {
    id?: string;
    name?: string;
    type?: string;
    tags?: { [propertyName: string]: string };
    location?: string;
}

/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * Location entity for given tenant.
 * @member {string} hostName
 * 
 */
export interface Location extends Resource {
    hostName: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {string} code
 * 
 * @member {string} message
 * 
 */
export interface ErrorModel {
    code: string;
    message: string;
}

/**
 * @class
 * Initializes a new instance of the GroupItem class.
 * @constructor
 * Group entity for Intune MAM.
 * @member {string} friendlyName
 * 
 */
export interface GroupItem extends Resource {
    friendlyName: string;
}

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Application entity for Intune MAM.
 * @member {string} friendlyName
 * 
 * @member {string} platform Possible values for this property include: 'ios',
 * 'android', 'windows'.
 * 
 * @member {string} [appId]
 * 
 */
export interface Application extends Resource {
    friendlyName: string;
    platform: string;
    appId?: string;
}

/**
 * @class
 * Initializes a new instance of the IOSMAMPolicy class.
 * @constructor
 * iOS Policy entity for Intune MAM.
 * @member {string} [fileEncryptionLevel] Possible values for this property
 * include: 'deviceLocked', 'deviceLockedExceptFilesOpen',
 * 'afterDeviceRestart', 'useDeviceSettings'.
 * 
 * @member {string} [touchId] Possible values for this property include:
 * 'enable', 'disable'.
 * 
 * @member {string} friendlyName
 * 
 * @member {string} [description]
 * 
 * @member {string} [appSharingFromLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [appSharingToLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [authentication] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {string} [clipboardSharingLevel] Possible values for this property
 * include: 'blocked', 'policyManagedApps', 'policyManagedAppsWithPasteIn',
 * 'allApps'.
 * 
 * @member {string} [dataBackup] Possible values for this property include:
 * 'allow', 'block'.
 * 
 * @member {string} [fileSharingSaveAs] Possible values for this property
 * include: 'allow', 'block'.
 * 
 * @member {string} [pin] Possible values for this property include:
 * 'required', 'notRequired'.
 * 
 * @member {number} [pinNumRetry]
 * 
 * @member {string} [deviceCompliance] Possible values for this property
 * include: 'enable', 'disable'.
 * 
 * @member {string} [managedBrowser] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * 
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * 
 * @member {moment.duration} [offlineWipeTimeout]
 * 
 * @member {number} [numOfApps]
 * 
 * @member {string} [groupStatus] Possible values for this property include:
 * 'notTargeted', 'targeted'.
 * 
 * @member {date} [lastModifiedTime]
 * 
 */
export interface IOSMAMPolicy extends Resource {
    fileEncryptionLevel?: string;
    touchId?: string;
    friendlyName: string;
    description?: string;
    appSharingFromLevel?: string;
    appSharingToLevel?: string;
    authentication?: string;
    clipboardSharingLevel?: string;
    dataBackup?: string;
    fileSharingSaveAs?: string;
    pin?: string;
    pinNumRetry?: number;
    deviceCompliance?: string;
    managedBrowser?: string;
    accessRecheckOfflineTimeout?: moment.Duration;
    accessRecheckOnlineTimeout?: moment.Duration;
    offlineWipeTimeout?: moment.Duration;
    numOfApps?: number;
    groupStatus?: string;
    lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the AndroidMAMPolicy class.
 * @constructor
 * Android Policy entity for Intune MAM.
 * @member {string} [screenCapture] Possible values for this property include:
 * 'allow', 'block'.
 * 
 * @member {string} [fileEncryption] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {string} friendlyName
 * 
 * @member {string} [description]
 * 
 * @member {string} [appSharingFromLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [appSharingToLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [authentication] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {string} [clipboardSharingLevel] Possible values for this property
 * include: 'blocked', 'policyManagedApps', 'policyManagedAppsWithPasteIn',
 * 'allApps'.
 * 
 * @member {string} [dataBackup] Possible values for this property include:
 * 'allow', 'block'.
 * 
 * @member {string} [fileSharingSaveAs] Possible values for this property
 * include: 'allow', 'block'.
 * 
 * @member {string} [pin] Possible values for this property include:
 * 'required', 'notRequired'.
 * 
 * @member {number} [pinNumRetry]
 * 
 * @member {string} [deviceCompliance] Possible values for this property
 * include: 'enable', 'disable'.
 * 
 * @member {string} [managedBrowser] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * 
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * 
 * @member {moment.duration} [offlineWipeTimeout]
 * 
 * @member {number} [numOfApps]
 * 
 * @member {string} [groupStatus] Possible values for this property include:
 * 'notTargeted', 'targeted'.
 * 
 * @member {date} [lastModifiedTime]
 * 
 */
export interface AndroidMAMPolicy extends Resource {
    screenCapture?: string;
    fileEncryption?: string;
    friendlyName: string;
    description?: string;
    appSharingFromLevel?: string;
    appSharingToLevel?: string;
    authentication?: string;
    clipboardSharingLevel?: string;
    dataBackup?: string;
    fileSharingSaveAs?: string;
    pin?: string;
    pinNumRetry?: number;
    deviceCompliance?: string;
    managedBrowser?: string;
    accessRecheckOfflineTimeout?: moment.Duration;
    accessRecheckOnlineTimeout?: moment.Duration;
    offlineWipeTimeout?: moment.Duration;
    numOfApps?: number;
    groupStatus?: string;
    lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppIdOrGroupIdPayload class.
 * @constructor
 * MAM Policy request body for properties Intune MAM.
 * @member {object} [properties]
 * 
 * @member {string} [properties.url]
 * 
 */
export interface MAMPolicyAppIdOrGroupIdPayload {
    properties?: MAMPolicyAppOrGroupIdProperties;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyAppOrGroupIdProperties class.
 * @constructor
 * Android Policy request body for Intune MAM.
 * @member {string} url
 * 
 */
export interface MAMPolicyAppOrGroupIdProperties {
    url: string;
}

/**
 * @class
 * Initializes a new instance of the MAMPolicyProperties class.
 * @constructor
 * @member {string} friendlyName
 * 
 * @member {string} [description]
 * 
 * @member {string} [appSharingFromLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [appSharingToLevel] Possible values for this property
 * include: 'none', 'policyManagedApps', 'allApps'.
 * 
 * @member {string} [authentication] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {string} [clipboardSharingLevel] Possible values for this property
 * include: 'blocked', 'policyManagedApps', 'policyManagedAppsWithPasteIn',
 * 'allApps'.
 * 
 * @member {string} [dataBackup] Possible values for this property include:
 * 'allow', 'block'.
 * 
 * @member {string} [fileSharingSaveAs] Possible values for this property
 * include: 'allow', 'block'.
 * 
 * @member {string} [pin] Possible values for this property include:
 * 'required', 'notRequired'.
 * 
 * @member {number} [pinNumRetry]
 * 
 * @member {string} [deviceCompliance] Possible values for this property
 * include: 'enable', 'disable'.
 * 
 * @member {string} [managedBrowser] Possible values for this property
 * include: 'required', 'notRequired'.
 * 
 * @member {moment.duration} [accessRecheckOfflineTimeout]
 * 
 * @member {moment.duration} [accessRecheckOnlineTimeout]
 * 
 * @member {moment.duration} [offlineWipeTimeout]
 * 
 * @member {number} [numOfApps]
 * 
 * @member {string} [groupStatus] Possible values for this property include:
 * 'notTargeted', 'targeted'.
 * 
 * @member {date} [lastModifiedTime]
 * 
 */
export interface MAMPolicyProperties {
    friendlyName: string;
    description?: string;
    appSharingFromLevel?: string;
    appSharingToLevel?: string;
    authentication?: string;
    clipboardSharingLevel?: string;
    dataBackup?: string;
    fileSharingSaveAs?: string;
    pin?: string;
    pinNumRetry?: number;
    deviceCompliance?: string;
    managedBrowser?: string;
    accessRecheckOfflineTimeout?: moment.Duration;
    accessRecheckOnlineTimeout?: moment.Duration;
    offlineWipeTimeout?: moment.Duration;
    numOfApps?: number;
    groupStatus?: string;
    lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the Device class.
 * @constructor
 * Device entity for Intune.
 * @member {string} userId
 * 
 * @member {string} friendlyName
 * 
 * @member {string} platform
 * 
 * @member {string} platformVersion
 * 
 * @member {string} deviceType
 * 
 */
export interface Device extends Resource {
    userId: string;
    friendlyName: string;
    platform: string;
    platformVersion: string;
    deviceType: string;
}

/**
 * @class
 * Initializes a new instance of the WipeDeviceOperationResult class.
 * @constructor
 * Device entity for Intune.
 * @member {string} value
 * 
 */
export interface WipeDeviceOperationResult extends Resource {
    value: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * OperationResult entity for Intune.
 * @member {string} friendlyName
 * 
 * @member {string} [category]
 * 
 * @member {string} [lastModifiedTime]
 * 
 * @member {string} [state]
 * 
 * @member {array} operationMetadata
 * 
 */
export interface OperationResult extends Resource {
    friendlyName: string;
    category?: string;
    lastModifiedTime?: string;
    state?: string;
    operationMetadata: OperationMetadataProperties[];
}

/**
 * @class
 * Initializes a new instance of the OperationMetadataProperties class.
 * @constructor
 * @member {string} name
 * 
 * @member {string} value
 * 
 */
export interface OperationMetadataProperties {
    name: string;
    value: string;
}

/**
 * @class
 * Initializes a new instance of the StatusesDefault class.
 * @constructor
 * Default Statuses entity for the given tenant.
 * @member {number} [deployedPolicies]
 * 
 * @member {number} [enrolledUsers]
 * 
 * @member {number} [flaggedUsers]
 * 
 * @member {date} [lastModifiedTime]
 * 
 * @member {number} [policyAppliedUsers]
 * 
 * @member {string} [status]
 * 
 * @member {number} [wipeFailedApps]
 * 
 * @member {number} [wipePendingApps]
 * 
 * @member {number} [wipeSucceededApps]
 * 
 */
export interface StatusesDefault extends Resource {
    deployedPolicies?: number;
    enrolledUsers?: number;
    flaggedUsers?: number;
    lastModifiedTime?: Date;
    policyAppliedUsers?: number;
    status?: string;
    wipeFailedApps?: number;
    wipePendingApps?: number;
    wipeSucceededApps?: number;
}

/**
 * @class
 * Initializes a new instance of the FlaggedUser class.
 * @constructor
 * Flagged user for the given tenant.
 * @member {number} [errorCount]
 * 
 * @member {string} [friendlyName]
 * 
 */
export interface FlaggedUser extends Resource {
    errorCount?: number;
    friendlyName?: string;
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledApp class.
 * @constructor
 * Flagged Enrolled App for the given tenant.
 * @member {string} [deviceType]
 * 
 * @member {string} [friendlyName]
 * 
 * @member {string} [lastModifiedTime]
 * 
 * @member {string} [platform]
 * 
 * @member {array} [errors]
 * 
 */
export interface FlaggedEnrolledApp extends Resource {
    deviceType?: string;
    friendlyName?: string;
    lastModifiedTime?: string;
    platform?: string;
    errors?: FlaggedEnrolledAppError[];
}

/**
 * @class
 * Initializes a new instance of the FlaggedEnrolledAppError class.
 * @constructor
 * @member {string} [errorCode]
 * 
 * @member {string} [severity]
 * 
 */
export interface FlaggedEnrolledAppError {
    errorCode?: string;
    severity?: string;
}